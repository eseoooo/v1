"use server";
import sg from "@sendgrid/mail";
import { validateText, validateEmail } from "@/lib/utils";

export const sendContactForm = async (prevState, formData) => {
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const subject = formData.get("subject").trim();
  const message = formData.get("message").trim();

  const NAME_MAX_LENGTH = 50;
  const NAME_MIN_LENGTH = 3;
  const MESSAGE_MAX_LENGTH = 600;
  const MESSAGE_MIN_LENGTH = 10;

  const nameError = validateText(name, NAME_MIN_LENGTH, NAME_MAX_LENGTH); // name is valid?
  const emailError = validateEmail(email);
  const subjectError = validateText(subject, NAME_MIN_LENGTH, NAME_MAX_LENGTH);
  const messageError = validateText(
    message,
    MESSAGE_MIN_LENGTH,
    MESSAGE_MAX_LENGTH
  );

  sg.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.TO_EMAIL_ADDRESS,
    from: {
      email: process.env.FROM_EMAIL_ADDRESS,
      name,
    },
    replyTo: email,
    text: message,
    subject,
  };

  try {
    if (nameError || emailError || subjectError || messageError) {
      const errorObject = {
        type: "input",
        errors: { nameError, emailError, subjectError, messageError },
      };
      throw new Error(JSON.stringify(errorObject));
    }

    await sg.send(msg);
    // trigger success notification
  } catch (error) {
    const errorObject = JSON.parse(error.message);

    if (errorObject?.type === "input") {
      return errorObject.errors;
    } else {
      // trigger error notification
    }
  }
};
