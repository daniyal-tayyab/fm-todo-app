import styled from "styled-components";

export const HomeContainer = styled("div")((props) => ({
  minHeight: "100vh",
  backgroundColor:
    props.thememode === "dark"
      ? props.theme.veryDarkBlue
      : props.theme.lightGrayishBlue,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  padding: "7rem 0",
}));

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35vh;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    height: 30vh;
  }
`;

export const TodoContainer = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40vw;

  @media (max-width: 1000px) {
    width: 60vw;
  }

  @media (max-width: 700px) {
    width: 70vw;
  }

  @media (max-width: 550px) {
    width: 90vw;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: hsl(0, 0%, 98%);
    font-size: 2.7rem;
    letter-spacing: 1rem;
  }

  svg {
    cursor: pointer;
  }
`;

export const InputContainer = styled("div")((props) => ({
  width: "100%",
  height: "5rem",
  backgroundColor:
    props.thememode === "dark"
      ? props.theme.veryDarkDesaturatedBlue
      : props.theme.veryLightGrayishBlue,
  borderRadius: "5px",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
}));

export const Round = styled("div")((props) => ({
  width: "18px",
  height: "18px",
  borderRadius: "50px",
  border: `1px solid ${
    props.thememode === "dark"
      ? props.theme.darkGrayishBlue
      : props.theme.veryDarkGrayishBlue
  }`,
  background: props.active ? props.theme.checkBackground : "transparent",
  marginRight: "2rem",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Form = styled.form`
  width: 100%;
`;

export const TodoInput = styled("input")((props) => ({
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
  padding: "5px",
  backgroundColor: "transparent",
  color:
    props.thememode === "dark"
      ? props.theme.lightGrayishBlue
      : props.theme.veryDarkGrayishBlue,
  fontWeight: "700",
}));

export const ListContainer = styled("ul")((props) => ({
  display: "flex",
  flexDirection: "column",

  backgroundColor:
    props.thememode === "dark"
      ? props.theme.veryDarkDesaturatedBlue
      : props.theme.veryLightGrayishBlue,
  borderRadius: "5px",
  listStyle: "none",
}));

export const StatusBar = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  font-size: 1.5rem;
  color: ${(props) =>
    props.thememode === "dark"
      ? props.theme.darkGrayishBlue
      : props.theme.veryDarkGrayishBlue};
  font-size: 1.3rem;

  @media (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const Counts = styled.div``;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
`;

export const Tab = styled.div`
  cursor: pointer;
  font-weight: 700;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    color: ${(props) => (props.thememode === "dark" ? "#fff" : "#000")};
  }
`;

export const ClearCompleted = styled.div`
  cursor: pointer;
`;
