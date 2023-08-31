import styled from 'styled-components';

export const StyledFeedback = styled.div`
  width: 400px;
  margin: auto;
  padding: 30px;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid darkgray;
  border-radius: 15px;
  background: linear-gradient(
    133deg,
    rgba(217, 217, 217, 0.28) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  backdrop-filter: blur(25px);
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;

`

export const BtnEl = styled.button`
  width: 75px;
  padding: 8px 16px;
  border: 1px solid darkgray;
  color: black;
  border-radius: 5px;
  background: linear-gradient(
    133deg,
    rgba(217, 217, 217, 0.28) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  backdrop-filter: blur(25px);

  :hover {
    background-color: purple;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

export const StyledItem = styled.li`
  width: 150px;
  padding: 8px 16px;
  border: 1px solid darkgray;
  color: black;
  border-radius: 5px;
  background: linear-gradient(
    133deg,
    rgba(217, 217, 217, 0.28) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  backdrop-filter: blur(25px);
`;
