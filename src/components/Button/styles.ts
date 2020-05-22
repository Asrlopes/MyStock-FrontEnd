import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #2766b3;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 20vw;
  font-weight: bold;
  font-size: 20px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#2766B3')};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
