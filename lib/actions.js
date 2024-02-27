"use server";

export const sendContactForm = async (formData) => {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  // console.log(rawFormData);
};
