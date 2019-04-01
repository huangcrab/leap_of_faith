import React from "react";
import ReactHtml from "raw-html-react";

import { Markdown } from "react-showdown";
import M from "materialize-css";

export function parseContent(body, markdown) {
  if (markdown === "1") {
    //return <ReactMarkdown source={body} />;
    return <Markdown markup={body} />;
  } else {
    return <ReactHtml html={body} />;
  }
}

export function getFullAnalytic(type, analytic) {
  switch (type) {
    case "overlay":
      return analytic.filter(item => item.hasOverlay).length;
    case "image":
      return analytic.filter(item => item.hasImage).length;
    case "link":
      return analytic.filter(item => item.hasLink).length;

    default:
      return null;
  }
}

export function displayError(message) {
  Object.keys(message).forEach(err => {
    M.toast({
      html: `<div class='toast-message'>${message[err]}</div>`
    });
  });
}

export function extractTime(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  const object = JSON.parse(window.atob(base64));
  return object.iat + 300;
}
