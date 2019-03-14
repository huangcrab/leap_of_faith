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
    return (
      <table>
        <tbody>
          <tr>
            {item.value.headerColumns.items.map((ele, index) => (
              <th key={index}>{ele.value.en}</th>
            ))}
          </tr>
          {item.value.rows.items.map((ele, index) => {
            return (
              <tr key={index}>
                {ele.columns.items.map((data, index) => {
                  return (
                    <td key={index}>
                      {data.type !== "LOCALIZATION"
                        ? data.value
                        : data.value.sourceValue}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return (
      <div key={item.key}>
        {item.key}:<span> {item.value}</span>
      </div>
    );
  }
};

export default function DynamicParams(props) {
  const { dynamic } = props;
  return (
    <Quote>
      {dynamic
        ? dynamic.map(item => {
            return displayItem(item);
          })
        : null}
    </Quote>
  );
}
