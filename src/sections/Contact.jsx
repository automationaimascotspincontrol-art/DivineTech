import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { contactConfig } from '../data/contactConfig';
import { servicesData } from '../data/servicesData';
import Button from '../components/Button';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        service: servicesData[0].title
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { name, email, service, message } = formState;

        // Find selected service template
        const selectedServiceObj = servicesData.find(s => s.title === service);
        const template = selectedServiceObj?.whatsappTemplate || "Hi Divine Tech, I'm interested in your services.";

        // Construct message
        const text = `${template}\n\n*My Details:*\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/918779667606?text=${encodedText}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        setSubmitted(true);
        setIsSubmitting(false);
    };

    return (
        <SectionWrapper id="contact" className="bg-black border-t border-white/10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">{contactConfig.title}</h2>
                    <p className="text-dim text-lg">{contactConfig.subtitle}</p>
                </div>

                {submitted ? (
                    <div className="bg-zinc-900/80 border border-gold/30 p-12 rounded-2xl text-center animate-fade-in shadow-2xl backdrop-blur-md">
                        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
                        <h3 className="text-2xl text-white font-serif mb-2">Message Sent via WhatsApp</h3>
                        <p className="text-dim mb-8">We have redirected you to WhatsApp to complete your request.</p>
                        <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/40 p-6 md:p-14 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-lg relative group">
                        {/* Hover Border Effect */}
                        <div className="absolute inset-0 rounded-2xl border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {contactConfig.formFields.filter(f => f.type !== 'textarea').map((field) => (
                                <div key={field.name} className="flex flex-col">
                                    <label htmlFor={field.name} className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-medium ml-1">{field.label}</label>
                                    {field.type === 'select' ? (
                                        <select
                                            name={field.name}
                                            onChange={handleChange}
                                            value={formState.service}
                                            className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all appearance-none cursor-pointer hover:bg-white/10"
                                        >
                                            {servicesData.map(service => (
                                                <option key={service.id} value={service.title} className="bg-zinc-900 text-white py-2">
                                                    {service.title}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            required
                                            onChange={handleChange}
                                            className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-gray-500 hover:bg-white/10"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {contactConfig.formFields.filter(f => f.type === 'textarea').map((field) => (
                            <div key={field.name} className="flex flex-col">
                                <label htmlFor={field.name} className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-medium ml-1">{field.label}</label>
                                <textarea
                                    name={field.name}
                                    rows="5"
                                    placeholder={field.placeholder}
                                    required
                                    onChange={handleChange}
                                    className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-gray-500 resize-none hover:bg-white/10"
                                ></textarea>
                            </div>
                        ))}

                        <div className="text-center pt-6">
                            <Button variant="primary" type="submit" className="w-full md:w-auto min-w-[240px] shadow-lg shadow-gold/10" disabled={isSubmitting}>
                                {isSubmitting ? 'Processing...' : (
                                    <>
                                        {contactConfig.submitText} <Send className="w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </SectionWrapper>
    );
};

export default Contact;
