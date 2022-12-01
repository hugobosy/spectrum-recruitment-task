import React from "react";
import S from "./Home.styles";
import { Paragraph } from "../../ui/components/paragraph/Paragraph";
import { Button } from "../../ui/components/button/Button";

export const Home = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <Paragraph
            weight={400}
            size="medium"
            font="lato"
            text="Hubert Kliszcz"
          />
          <Button text="formularz rejestracyjny" bgColor="darkGreen" />
        </S.Header>
        <S.Content></S.Content>
      </S.Container>
    </S.Wrapper>
  );
};