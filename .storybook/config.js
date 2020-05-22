import React from 'react';
import { addParameters, addDecorator } from '@storybook/react'

import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';  

import GlobalStyle from '../src/styles/global'

import theme from './customTheme'

const withGlobal = (Story) => (
  <>
  <Story/>
  <GlobalStyle/>
  </>
)

addParameters({
  options:{
    theme
  }
})

addDecorator(withInfo);
addDecorator(centered);
addDecorator(withGlobal);

