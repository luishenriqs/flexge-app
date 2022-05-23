import React, { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import Logo from "../../assets/flexgeLogoAzul60.png";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Container, Content, AnimationContainer, Background } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

interface IUser {
  userName: string;
  email: string;
  password: string;
}

interface IAuthenticated {
  name: string;
  e_mail: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [name, setName] = useState<IAuthenticated>();
  const [e_mail, setE_mail] = useState<IAuthenticated>();

  useEffect(() => {
    console.log("NAME ---> ", name);
    console.log("EMAIL ---> ", e_mail);
  }, [name, e_mail]);

  /* ***********************[CADASTRO DE USUÁRIO]**************************** */
  async function handleSubmit({
    userName,
    email,
    password,
  }: IUser): Promise<IAuthenticated> {
    const response = await api.post(`/accounts/create`, {
      userName,
      email,
      password,
    });

    const name = response.data.message.name;
    const e_mail = response.data.message.email;

    setName(name);
    setE_mail(e_mail);

    return { name, e_mail };
  }
  /* ************************************************************************ */

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="Logo" />
          <p>
            <strong>+31.000 EXERCÍCIOS DISPONÍVEIS</strong>
            <br />
            TRILHA DE APRENDIZAGEM COMPLETA <br />
            PLANEJAMENTO DAS AULAS
          </p>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h4>Faça seu cadastro</h4>
            <div className="inputContainer">
              <Input name="userName" placeholder="Nome" />
              <Input name="email" placeholder="Email" type="email" />
              <Input name="password" placeholder="Senha" type="password" />
            </div>
            <Button className="firstButton" type="submit">
              Cadastrar
            </Button>
          </Form>
          <Link to="/">
            <FiLogOut />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
