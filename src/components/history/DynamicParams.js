import React from "react";
import styled from "styled-components";
import uuid from "uuid/v4";

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
      <table key={uuid()}>
        <tbody>
          <tr>
            {item.value.headerColumns.items.map(ele => (
              <th key={uuid()}>{ele.value.en}</th>
            ))}
          </tr>
          {item.value.rows.items.map(ele => {
            return (
              <tr key={uuid()}>
                {ele.columns.items.map(data => {
                  return (
                    <td key={uuid()}>
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
    <Quote key={uuid()}>
      {dynamic
        ? dynamic.map(item => {
            return displayItem(item);
          })
        : null}
    </Quote>
  );
}
