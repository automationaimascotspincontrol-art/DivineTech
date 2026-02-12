export const contactConfig = {
    title: "Let’s Build Something Exceptional",
    subtitle: "Ready to elevate your digital presence? We are currently accepting new partnerships.",
    formFields: [
        { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
        { name: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
        {
            name: "service", label: "Interested Service", type: "select", options: [
                "Website Development", "E-commerce", "SaaS Product", "UI/UX Design", "Consultation"
            ]
        },
        { name: "message", label: "Project Details", type: "textarea", placeholder: "Tell us about your vision..." },
    ],
    submitText: "Request Consultation",
    successMessage: "Thank you. We have received your request and will respond shortly.",
};
