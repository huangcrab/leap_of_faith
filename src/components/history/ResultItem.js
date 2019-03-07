import styled from "styled-components";

export const ResultItem = styled.li`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: auto;
  background: white;
  color: black;
  padding: 5px 10px;

  & .upper {
    padding-bottom: 2px;
    border-bottom: 2px solid black;
  }

  &.field .upper {
    border-bottom: 6px solid var(--secondary-color);
    padding-bottom: 0;
  }

  & .lower {
    font-weight: normal;
  }

  &:hover,
  &.focus {
    background: #bcdaf2;
  }

  & .icon-group.disable {
    & .icon {
      opacity: 0.4;
    }
  }
`;
