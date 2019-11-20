import React from 'react'
import Head from 'next/head'
import {ThemeProvider, newskitLightTheme, H1, H4} from 'newskit';
import {Visible} from 'newskit/grid';

const Template = ({title, children}) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider theme={newskitLightTheme}>
      <H1>{title}</H1>
      <Visible xs><H4>XS ({newskitLightTheme.breakpoints.xs}px - {newskitLightTheme.breakpoints.sm - 1}px)</H4></Visible>
      <Visible sm><H4>SM ({newskitLightTheme.breakpoints.sm}px - {newskitLightTheme.breakpoints.md - 1}px)</H4></Visible>
      <Visible md><H4>MD ({newskitLightTheme.breakpoints.md}px - {newskitLightTheme.breakpoints.lg - 1}px)</H4></Visible>
      <Visible lg><H4>LG (>={newskitLightTheme.breakpoints.lg}px)</H4></Visible>
      <hr/>
      {children}
    </ThemeProvider>
  </div>
)

export default Template;
