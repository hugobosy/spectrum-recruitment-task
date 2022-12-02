import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Wrapper } from "../../ui/components/wrapper/Wrapper";
import { Container } from "../../ui/components/container/Container";
import { RegisterData } from "./RegisterForm.types";
import S from "./RegisterForm.styles";
import {Button} from "../../ui/components/button/Button";

export const RegisterForm = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    id: uuid(),
    login: "",
    password: "",
    email: "",
    phone: '',
    checked: false,
  });

  return (
    <Wrapper>
      <Container>
        <form>
          <div>
            <label>Login:</label>
            <input
              type="text"
              value={registerData.login}
              onChange={(e) =>
                setRegisterData({ ...registerData, login: e.target.value })
              }
            />
          </div>
          <div>
            <label>Hasło:</label>
            <input
              type="password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              type="email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label>Numer telefonu:</label>
            <input
              type="text"
              value={registerData.phone}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  phone: e.target.value,
                })
              }
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={registerData.checked}
              onChange={(e) =>
                setRegisterData({ ...registerData, checked: e.target.checked })
              }
            />
            <label>Akceptuję regulamin</label>
          </div>
          <Button text="zapisz" handleClick={()=>{}} bgColor="blue" />
        </form>
      </Container>
    </Wrapper>
  );
};
