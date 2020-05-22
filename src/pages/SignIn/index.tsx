import React from 'react';

// import { Container } from './styles';
import WhiteContainer from '../../components/Containers/WhiteContainer';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <>
      {/* <h1>Login</h1> */}
      <WhiteContainer>
        <Button color="#333">Entrar</Button>
      </WhiteContainer>
    </>
  );
};

export default SignIn;
