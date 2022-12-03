import React, { useState } from "react";
import { Wrapper } from "../../ui/components/wrapper/Wrapper";
import { Container } from "../../ui/components/container/Container";
import { Form } from "../../components/form/Form";

export const RegisterForm = () => {
  return (
    <Wrapper>
      <Container page="regForm">
        <Form />
      </Container>
    </Wrapper>
  );
};
