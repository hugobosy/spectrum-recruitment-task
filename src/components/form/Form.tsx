import React, { useState } from "react";
import { Button } from "../../ui/components/button/Button";
import { RegisterData } from "../../pages/register-form/RegisterForm.types";
import { v4 as uuid } from "uuid";
import { Input } from "../../ui/components/input/Input";
import S from "./Form.styles";
import { Paragraph } from "../../ui/components/paragraph/Paragraph";
import { Checkbox } from "../../ui/components/checkbox/Checkbox";

export const Form = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    id: uuid(),
    login: "",
    password: "",
    email: "",
    phone: "",
    checked: false,
  });

  return (
    <S.Form>
      <Paragraph
        weight={800}
        size="small"
        font="inter"
        text="formularz rejestracyjny"
        isUppercase
        letterSpacing={0.15}
        align="right"
        isUnderline
        lineHeight={33}
      />
      <Input
        type="text"
        text="Login"
        value={registerData.login}
        change={(e) =>
          setRegisterData({ ...registerData, login: e.target.value })
        }
        id="login"
      />

      <Input
        type="password"
        text="Hasło"
        value={registerData.password}
        change={(e) =>
          setRegisterData({ ...registerData, password: e.target.value })
        }
        id="password"
      />

      <Input
        type="email"
        text="E-mail"
        value={registerData.email}
        change={(e) =>
          setRegisterData({ ...registerData, email: e.target.value })
        }
        id="proba"
      />

      <Input
        type="text"
        text="Numer telefonu"
        value={registerData.phone}
        change={(e) =>
          setRegisterData({ ...registerData, phone: e.target.value })
        }
        id="phone"
      />

      {/*<Input*/}
      {/*  type="checkbox"*/}
      {/*  text="Akceptuję regulamin"*/}
      {/*  checked={registerData.checked}*/}
      {/*  change={(e) =>*/}
      {/*    setRegisterData({ ...registerData, checked: e.target.checked })*/}
      {/*  }*/}
      {/*  id="check"*/}
      {/*/>*/}

      <Checkbox
        checked={registerData.checked}
        id="check"
        change={(e) =>
          setRegisterData({ ...registerData, checked: e.target.checked })
        }
      />
      <S.Confirm>
        <Button text="zapisz" handleClick={() => {}} bgColor="blue" align="center"/>
      </S.Confirm>
    </S.Form>
  );
};