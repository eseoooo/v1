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
