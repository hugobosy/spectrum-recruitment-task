import React, { useState } from "react";
import { Wrapper } from "../../ui/components/wrapper/Wrapper";
import { Container } from "../../ui/components/container/Container";
import { Form } from "../../components/form/Form";
import { RegisterFormTypes } from "./RegisterForm.types";

export const RegisterForm: React.FC<RegisterFormTypes> = ({ tab }) => {
  return (
    <Wrapper>
      <Container page="regForm">
        <Form tab={tab} />
      </Container>
    </Wrapper>
  );
};
