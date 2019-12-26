import React, { useState } from "react";
import styled from "@emotion/styled";
import { Label, Input, ErrorDiv, SuccessDiv } from "../forms/form-components";
import { signup } from "./api";
import { NavHeader } from "./NavHeader";

const PageWrapper = styled.div({
  margin: "0 auto",
  width: "500px",
  textAlign: "centered"
});

export const SignupForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupFailure, setSignupFailure] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  async function clickSignup(event) {
    // don't allow a user to signup with a blank email
    if (email === "") {
      setSignupFailure("Email cannot be blank. Please, try again.");
      return;
    }
    setSignupFailure(false);
    setSignupSuccess(false);
    const response = await signup({ email, password });
    console.warn("response", response);
    if (response.name === "BadRequest" && response.message === "instance not unique") {
      setSignupFailure("Account already exists with this email. Please, try again.");
    }
    if (response.ref) {
      setSignupSuccess("User Created!");
    }
  }

  return (
    <PageWrapper>
      <NavHeader />
      <h2>Sign up</h2>

      {signupFailure && <ErrorDiv>{signupFailure}</ErrorDiv>}
      {signupSuccess && <SuccessDiv>{signupSuccess}</SuccessDiv>}

      <Label htmlFor="email">Email:</Label>
      <Input type="email" id="email" onChange={e => setEmail(e.target.value)} />
      <br />
      <Label htmlFor="password">Password:</Label>
      <Input type="password" id="password" onChange={e => setPassword(e.target.value)} />
      <br />
      <button type="submit" onClick={clickSignup}>
        Sign up
      </button>
    </PageWrapper>
  );
};
