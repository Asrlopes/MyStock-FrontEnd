import React from 'react';
import { addParameters, addDecorator } from '@storybook/react'

import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';  

import GlobalStyle from '../src/styles/global'

const withGlobal = (Story) => (
  <>
  <Story/>
  <GlobalStyle/>
  </>
)

addDecorator(withInfo);
addDecorator(centered);
addDecorator(withGlobal);

