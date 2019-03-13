import React from "react";
import styled from "styled-components";

const Quote = styled.blockquote`
  color: black;
  font-size: 12px;
  & span {
    font-weight: bold;
    color: #fd7f80;
  }
`;

const displayItem = item => {
  if (item.type === "TABLE") {
  } else {
    if (item.key !== "") {
      return (
        <div>
          {item.key}:<span> {item.value}</span>
        </div>
      );
    } else return null;
  }
};

export default function DynamicParams(props) {
  const { dynamic } = props;
  return (
    <Quote>
      {dynamic
        ? dynamic.map(item => {
            displayItem(item);
          })
        : null}
    </Quote>
  );
}
