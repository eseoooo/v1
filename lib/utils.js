import parse from "html-react-parser";

export const parseMarkdownLinks = (inputString) => {
  // convert markdown links to html links
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  const replacedString = inputString.replace(
    markdownLinkRegex,
    function (match, text, url) {
      return `<a href=${url} target="_blank" rel="noreferrer" aria-label="${text} (opens in a new tab)" className="link">${text}</a>`;
    }
  );
  return parse(replacedString);
};

export const validateText = (text, minLength, maxLength) => {
  if (text.trim() === "") {
    return "This field is required";
  }
  if (text.trim().length < minLength) {
    return `Please lengthen this text to at least ${minLength} characters`;
  }
  if (text.trim().length > maxLength) {
    return `Please shorten this text to at most ${maxLength} characters`;
  }
  return null;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim().match(emailRegex) || email.trim() === "") {
    return "Please provide a valid email";
  }
  return null;
};

export const isValidJSON = (text) => {
  if (typeof text !== "string") {
    return false;
  }
  try {
    JSON.parse(text);
    return true;
  } catch (error) {
    return false;
  }
};
