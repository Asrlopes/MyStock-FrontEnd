import React from 'react';

import { storiesOf } from '@storybook/react';

import WhiteContainer from '../../components/Containers/WhiteContainer';

storiesOf('WhiteContainer', module)
  .add('Com conteúdo', () => (
    <WhiteContainer>
      <span style={{ color: '#333' }}>Com conteúdo</span>
      <input type="text" />
      <input type="textarea" />
    </WhiteContainer>
  ))
  .add('Sem conteúdo', () => <WhiteContainer />);
