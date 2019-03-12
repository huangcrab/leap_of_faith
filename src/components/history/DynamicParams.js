import React from "react";
import styled from "styled-components";

const Quote = styled.blockquote`
  color: black;

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
            if (item.key != "") {
              return (
                <div>
                  {item.key}:<span> {item.value}</span>
                </div>
              );
            }
          })
        : null}
    </Quote>
  );
}
