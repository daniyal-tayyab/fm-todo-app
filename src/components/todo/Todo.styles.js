import styled from "styled-components";

export const TodoContainer = styled("li")((props) => ({
  height: "5rem",
  display: "flex",
  alignItems: "center",
  padding: "2rem 1rem",
  fontSize: "1.5rem",
  borderBottom: `1px solid ${
    props.thememode === "dark"
      ? props.theme.veryDarkGrayishBlue
      : props.theme.lightGrayishBlue
  }`,
  cursor: "grab",
}));

export const TodoText = styled("p")((props) => ({
  backgroundColor: "transparent",
  color:
    props.thememode === "dark"
      ? props.theme.lightGrayishBlueHover
      : props.theme.veryDarkGrayishBlue,
  textDecoration: props.active ? "line-through" : "",
}));
