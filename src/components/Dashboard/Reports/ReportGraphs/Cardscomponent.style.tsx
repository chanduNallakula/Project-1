import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  margin: 30px 0;
`;

export const CardWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Heading = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;

  border-radius: 8px;
`;
