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
