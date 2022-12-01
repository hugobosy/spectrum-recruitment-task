import React from "react";
import { Paragraph } from "../../ui/components/paragraph/Paragraph";
import { Button } from "../../ui/components/button/Button";
import S from "./Home.styles";
import { AcceptIcon } from "../../ui/accept-icon/AcceptIcon";
import { UserIcon } from "../../ui/user-icon/UserIcon";

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
        <S.Content>
          <img src="https://picsum.photos/534/383" alt="Portrait" />
          <S.Name>
            <Paragraph weight={800} size="large" font="inter" text="Name" />
            <UserIcon />
            <AcceptIcon />
          </S.Name>
          <S.Properties>
            <Paragraph weight={100} size="small" font="inter" text="age:" />
            <Paragraph
              weight={100}
              size="small"
              font="inter"
              text="eye color:"
            />
          </S.Properties>
        </S.Content>
        <Button text="next profiles" bgColor="green" />
      </S.Container>
    </S.Wrapper>
  );
};
