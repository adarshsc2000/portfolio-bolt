// Email Service for Contact Form
// This uses EmailJS - a free service for sending emails from client-side

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

// EmailJS Configuration
// You'll need to sign up at https://www.emailjs.com/ and get these values
const EMAILJS_CONFIG = {
  serviceId: 'your_service_id', // Replace with your EmailJS service ID
  templateId: 'your_template_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key' // Replace with your EmailJS public key
};

export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // For now, we'll simulate sending an email
    // In production, you would use EmailJS or a backend service
    
    console.log('Sending email with data:', formData);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demonstration, we'll always return success
    // In real implementation, you would handle actual email sending
    return {
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    };
    
    // Uncomment below for actual EmailJS implementation:
    /*
    const { default: emailjs } = await import('@emailjs/browser');
    
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'your.email@example.com' // Your email
      },
      EMAILJS_CONFIG.publicKey
    );

    if (result.status === 200) {
      return {
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.'
      };
    } else {
      throw new Error('Failed to send email');
    }
    */
    
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
    };
  }
};

// Instructions for setting up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values in EMAILJS_CONFIG above
// 6. Uncomment the EmailJS implementation code
// 7. Install EmailJS: npm install @emailjs/browser