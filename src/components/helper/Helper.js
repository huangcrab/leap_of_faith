import React from "react";
import ReactHtml from "raw-html-react";
import ReactMarkdown from "react-markdown";
import { Markdown } from "react-showdown";

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
