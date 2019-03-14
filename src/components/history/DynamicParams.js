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

export default function DynamicParams(props) {
  const { dynamic } = props;
  return (
    <Quote>
      {dynamic
        ? dynamic.map(item => {
            if (item.key !== "" && item.type !== "TABLE") {
              return (
                <div key={item.key}>
                  {item.key}:<span> {item.value}</span>
                </div>
              );
            } else return null;
          })
        : null}
    </Quote>
  );
}
