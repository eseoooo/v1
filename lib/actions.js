"use server";
import sg from "@sendgrid/mail";

export const sendContactForm = async (formData) => {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  sg.setApiKey(process.env.SENDGRID_API_KEY);
  const message = {
    to: process.env.TO_EMAIL_ADDRESS,
    from: {
      email: process.env.FROM_EMAIL_ADDRESS,
      name: rawFormData.name,
    },
    replyTo: rawFormData.email,
    subject: rawFormData.subject,
    text: rawFormData.message,
  };

  try {
    // validate form and form status
    await sg.send(message);
  } catch (error) {
    console.error(error);
  }
};
