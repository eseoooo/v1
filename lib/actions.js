"use server";
import sg from "@sendgrid/mail";
import { validateText, validateEmail, isValidJSON } from "@/lib/utils";

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
      throw new Error(
        JSON.stringify({
          submitted: false,
          errorType: "input",
          message: { nameError, emailError, subjectError, messageError },
        })
      );
    }

    await sg.send(msg);
    return {
      submitted: true,
      errorType: null,
      message: "Your message has been sent!",
    };
    // clear input and some redirection
  } catch (error) {
    if (isValidJSON(error.message)) {
      const errorObject = JSON.parse(error.message);
      if (errorObject.message) {
        return errorObject.message;
      } else {
        return {
          submitted: false,
          errorType: "other",
          message: "Something went wrong. Please try again",
        };
      }
    } else {
      return {
        submitted: false,
        errorType: "other",
        message: "Something went wrong. Please try again",
      };
    }
  }
};
