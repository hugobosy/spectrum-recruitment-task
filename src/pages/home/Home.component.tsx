import React, { useEffect, useState } from "react";
import { Paragraph } from "../../ui/components/paragraph/Paragraph";
import { Button } from "../../ui/components/button/Button";
import { AcceptIcon } from "../../ui/components/accept-icon/AcceptIcon";
import { UserIcon } from "../../ui/components/user-icon/UserIcon";
import { Wrapper } from "../../ui/components/wrapper/Wrapper";
import { Container } from "../../ui/components/container/Container";
import { NavLink } from "react-router-dom";
import { Data, HomeTypes } from "./Home.types";
import S from "./Home.styles";

export const Home: React.FC<HomeTypes> = ({ tab }) => {
  const [data, setData] = useState<Data[]>([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/people/${number}/`)
      .then((res) => res.json())
      .then((data) => {
        setData([data]);
      });
  }, [number]);

  const nextData = () => {
    setNumber(number + 1);
  };

  const updateTab = () => {
    data.map((item) => {
      tab.push({
        name: item.name,
        created: item.created,
        vehicles: item.vehicles,
      });
    });
  };

  console.log(tab);
  return (
    <Wrapper>
      <Container page="home">
        <S.Header>
          <Paragraph
            weight={400}
            size="medium"
            font="lato"
            text="Hubert Kliszcz"
          />
          <NavLink to="/register">
            <Button
              text="formularz rejestracyjny"
              bgColor="darkGreen"
              handleClick={() => {}}
            />
          </NavLink>
        </S.Header>
        {data.map(({ name, birth_year, eye_color }) => (
          <S.Content key={name}>
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
        <Button
          text="next profiles"
          bgColor="green"
          handleClick={() => {
            nextData();
            updateTab();
          }}
        />
      </Container>
    </Wrapper>
  );
};
