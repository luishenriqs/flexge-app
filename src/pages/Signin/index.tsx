import api from "../../services/api";
import React, { useCallback, useRef } from "react";
import { signInUsersRequest } from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import Logo from "../../assets/flexgeLogoAzul60.png";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Container, Content, AnimationContainer, Background } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

interface IUser {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  let navigate = useNavigate();

  /* ************************[LOGIN DE USUÁRIO]****************************** */
  const handleSubmit = useCallback(
    async ({ email, password }: IUser) => {
      try {
        const response = await api.post("/accounts/login", {
          email,
          password,
        });

        const user = response.data;

        signInUsersRequest(user);

        navigate("/dashboard");
      } catch (error) {
        console.log("error", error);
      }
    },
    [navigate]
  );

  /* ************************************************************************ */

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="Logo" />
          <p>
            <strong>MATERIAL DIDÁTICO DIGITAL</strong>
            <br />
            PARA PROFESSORES PARTICULARES <br />
            DE INGLÊS
          </p>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h4>Faça seu login</h4>
            <div className="inputContainer">
              <Input name="email" placeholder="Email" type="email" />
              <Input name="password" placeholder="Senha" type="password" />
            </div>
            <Button className="firstButton" type="submit">
              Experimente
            </Button>
          </Form>
          <Link to="/signup">
            Criar conta
            <FiLogIn />
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
