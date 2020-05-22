import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../../components/Button';

storiesOf('Button', module)
  .add('Com conteúdo', () => <Button>Entrar</Button>)
  .add('Sem conteúdo', () => <Button />)
  .add('Desabilitado', () => <Button disabled>Entrar</Button>);
