import React, { useState } from "react";
import { Button } from "../../ui/components/button/Button";
import { RegisterData } from "../../pages/register-form/RegisterForm.types";
import { v4 as uuid } from "uuid";
import { Input } from "../../ui/components/input/Input";

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
    <form>
      <div>
        <label>Login:</label>
        <p>
          <input
            type="text"
            value={registerData.login}
            onChange={(e) =>
              setRegisterData({ ...registerData, login: e.target.value })
            }
          />
        </p>
      </div>
      <div>
        <label>Hasło:</label>
        <p>
          <input
            type="password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
        </p>
      </div>
      <div>
        <label>E-mail:</label>
        <p>
          <input
            type="email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
        </p>
      </div>
      <div>
        <label>Numer telefonu:</label>
        <p>
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
        </p>
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
      <Input
        type="text"
        text="Proba"
        value={registerData.email}
        change={(e) =>
          setRegisterData({ ...registerData, email: e.target.value })
        }
        id="proba"
      />
      <Button text="zapisz" handleClick={() => {}} bgColor="blue" />
    </form>
  );
};
