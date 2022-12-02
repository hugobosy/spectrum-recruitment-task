import React, { useState } from "react";
import { Wrapper } from "../../ui/components/wrapper/Wrapper";
import { Container } from "../../ui/components/container/Container";
import { Form } from "../../components/form/Form";
import { Paragraph } from "../../ui/components/paragraph/Paragraph";

export const RegisterForm = () => {
  return (
    <Wrapper>
      <Container paddingTop={101}>
        <Form />
      </Container>
    </Wrapper>
  );
};
