import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;

  .mainContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    padding: 30px;

    img {
      width: 220px;
    }

    h1 {
      width: 100%;
      color: #969cb3;
      font-size: 36px;
      font-weight: normal;
      padding: 20px 32px;
    }
  }
`;
