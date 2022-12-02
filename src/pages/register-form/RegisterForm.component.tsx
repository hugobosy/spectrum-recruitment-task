import React, { useState } from "react";
import { Wrapper } from "../../ui/components/wrapper/Wrapper";
import { Container } from "../../ui/components/container/Container";
import { Form } from "../../components/form/Form";
import { Paragraph } from "../../ui/components/paragraph/Paragraph";

export const RegisterForm = () => {
  return (
    <Wrapper>
      <Container paddingTop={100} paddingRight={174} paddingLeft={174}>
        <Paragraph
          weight={800}
          size="small"
          font="inter"
          text="formularz rejestracyjny"
          isUppercase
          letterSpacing={0.15}
          align="right"
        />
        <Form />
      </Container>
    </Wrapper>
  );
};
