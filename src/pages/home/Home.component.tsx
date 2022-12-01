import React, { useEffect, useState } from "react";
import { Paragraph } from "../../ui/components/paragraph/Paragraph";
import { Button } from "../../ui/components/button/Button";
import S from "./Home.styles";
import { AcceptIcon } from "../../ui/accept-icon/AcceptIcon";
import { UserIcon } from "../../ui/user-icon/UserIcon";

interface data {
  name: string;
  birth_year: string;
  eye_color: string;
}

export const Home = () => {
  const [data, setData] = useState<data[]>([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${number}/`)
      .then((res) => res.json())
      .then((data) => setData([data]));
  }, []);

  console.log(data);

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
        {data.map(({ name, birth_year, eye_color }) => (
          <S.Content>
            <img src="https://picsum.photos/534/383" alt="Portrait" />
            <S.Name>
              <Paragraph weight={800} size="large" font="inter" text={name} />
              <S.Icons>
                <UserIcon />
                <AcceptIcon />
              </S.Icons>
            </S.Name>
            <S.Properties>
              <Paragraph
                weight={100}
                size="small"
                font="inter"
                text={`age: ${birth_year}`}
                isItalic
              />
              <Paragraph
                weight={100}
                size="small"
                font="inter"
                text={`eye color: ${eye_color}`}
                isItalic
              />
            </S.Properties>
          </S.Content>
        ))}
        <Button text="next profiles" bgColor="green" />
      </S.Container>
    </S.Wrapper>
  );
};
