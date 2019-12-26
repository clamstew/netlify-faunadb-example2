import styled from "@emotion/styled";

export const Label = styled.label({
  fontWeight: "bold"
});

export const Input = styled.input({
  display: "block",
  width: "100%",
  height: 34,
  padding: "6px 12px",
  fontSize: 14,
  lineHeight: 1.42857143,
  color: "#555",
  backgroundColor: "#fff",
  backgroundImage: "none",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
  transition: "border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s"
});

export const ErrorDiv = styled.div({
  color: "red"
});

export const SuccessDiv = styled.div({
  color: "green"
});

