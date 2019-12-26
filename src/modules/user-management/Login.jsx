import React, { useState } from "react";
import styled from "@emotion/styled";
import { Label, Input, ErrorDiv, SuccessDiv } from "../forms/form-components";
import { login } from "./api";
import { NavHeader } from "./NavHeader";
import { setAuthToken } from "./user-service";

const PageWrapper = styled.div({
  margin: "0 auto",
  width: "500px",
  textAlign: "centered"
});

export const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailure, setLoginFailure] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  async function clickLogin(event) {
    if (!email && !password) {
      setLoginFailure("Email and Password is required for login.");
      return;
    }
    if (!email) {
      setLoginFailure("Email is required for login.");
      return;
    }
    if (!password) {
      setLoginFailure("Password is required for login.");
      return;
    }

    setLoginFailure(false);
    setLoginSuccess(false);
    const response = await login({ email, password });
    console.warn("response", response);
    if (response.name === "BadRequest") {
      setLoginFailure("Login Failure! Please try again.");
    }
    if (response.secret) {
      setLoginSuccess("User Logged In!");
    }

    setAuthToken(response.secret);
  }

  return (
    <PageWrapper>
      <NavHeader />
      <h2>Login</h2>

      {loginFailure && <ErrorDiv>{loginFailure}</ErrorDiv>}
      {loginSuccess && <SuccessDiv>{loginSuccess}</SuccessDiv>}

      <Label htmlFor="email">Email:</Label>
      <Input type="email" id="email" onChange={e => setEmail(e.target.value)} />
      <br />
      <Label htmlFor="password">Password:</Label>
      <Input type="password" id="password" onChange={e => setPassword(e.target.value)} />
      <br />
      <button type="submit" onClick={clickLogin}>
        Login
      </button>
    </PageWrapper>
  );
};
