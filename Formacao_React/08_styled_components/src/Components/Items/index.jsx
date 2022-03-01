import styled from "styled-components";
import React from "react";
import Item from "../Item";
import ImageFilter from "../ImageFilter";

const Items = styled.div`
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default (props) => {
  return (
    <Items>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Items>
  );
};