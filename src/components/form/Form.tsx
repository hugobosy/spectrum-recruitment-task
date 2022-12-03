import React, { SyntheticEvent, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "../../ui/components/button/Button";
import { Input } from "../../ui/components/input/Input";
import { Errors, RegisterData } from "./Form.types";
import { Paragraph } from "../../ui/components/paragraph/Paragraph";
import { Checkbox } from "../../ui/components/checkbox/Checkbox";
import S from "./Form.styles";

export const Form = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    id: uuid(),
    login: "",
    password: "",
    email: "",
    phone: "",
    checked: false,
  });

  const [errors] = useState<Errors>({
    login: registerData.login.length >= 3,
    password: registerData.password.length >= 6,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      registerData.email
    ),
    phone: /^\d+$/.test(registerData.phone) && registerData.phone.length === 9,
    checked: registerData.checked,
  });

  const handleSend = async () => {
    await fetch("https://example.com/", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (
      errors.login &&
      errors.password &&
      errors.email &&
      errors.phone &&
      errors.checked
    ) {
      await handleSend();
    }
  };

  return (
    <S.Form onSubmit={handleForm}>
      <div>
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
      </div>
      <Input
        type="text"
        text="Login"
        value={registerData.login}
        change={(e) =>
          setRegisterData({ ...registerData, login: e.target.value })
        }
        id="login"
        error={
          registerData.login.length > 3 || registerData.login.length === 0
            ? ""
            : "Login musi mieć minimum 3 znaki"
        }
        required={true}
      />

      <Input
        type="password"
        text="Hasło"
        value={registerData.password}
        change={(e) =>
          setRegisterData({ ...registerData, password: e.target.value })
        }
        id="password"
        error={
          registerData.password.length > 6 || registerData.password.length === 0
            ? ""
            : "Hasło musi miec conajmniej 6 znaków"
        }
        required={true}
      />

      <Input
        type="email"
        text="E-mail"
        value={registerData.email}
        change={(e) =>
          setRegisterData({ ...registerData, email: e.target.value })
        }
        id="proba"
        error={
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            registerData.email
          ) || registerData.email.length === 0
            ? ""
            : "Nieprawidłowy format e-mail"
        }
        required={true}
      />

      <Input
        type="text"
        text="Numer telefonu"
        value={registerData.phone}
        change={(e) =>
          setRegisterData({ ...registerData, phone: e.target.value })
        }
        id="phone"
        error={
          (/^[0-9]+$/.test(registerData.phone) &&
            registerData.phone.length === 9) ||
          registerData.phone.length === 0
            ? ""
            : "Nieprawidłowy numer telefonu"
        }
        required={true}
      />

      <Checkbox
        checked={registerData.checked}
        id="check"
        change={(e) =>
          setRegisterData({ ...registerData, checked: e.target.checked })
        }
        error={registerData.checked}
      />
      <S.Confirm>
        <Button text="zapisz" type="submit" bgColor="blue" align="center" />
      </S.Confirm>
    </S.Form>
  );
};
