import React from "react";
import Header from "../../components/Header";
import logo from "../../assets/flexgeLogoAzul30.png";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const Companys: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <div className="mainContainer">
          <div className="presentation">
            <img src={logo} alt="Logo" />
            <h1>Aqui cadastro de novos contratos... ...</h1>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Companys;
