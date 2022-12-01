import React from "react";
import S from './Home.styles';
import {Paragraph} from "../../ui/components/paragraph/Paragraph";

export const Home = () => {

    return (
        <S.Wrapper>
            <S.Container>
                <Paragraph weight={800} size="large" font="inter" text="name" />
            </S.Container>
        </S.Wrapper>
    )
}