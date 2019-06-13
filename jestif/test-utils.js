import React from 'react'
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './src/theme';


export const matches = (children, theme = defaultTheme) => expect(
  renderer.create(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ).toJSON()
).toMatchSnapshot()