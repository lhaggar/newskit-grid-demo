import React from 'react';
import {Grid, Cell} from 'newskit/grid';
import {P, H3, styled, getSizingFromTheme, getColorFromTheme} from 'newskit';
import Template from '../components/template';

const Content = styled(H3)`
  border: solid 2px ${getColorFromTheme('supportInformative')};
  text-align: center;
  padding: ${getSizingFromTheme('sizing08')} 0;
  background: ${({color}) => color};
`;

const Demo = () => (
  <Template title="Grid Demo - Overriding">
    <Grid
      xsMargin="sizing00"
      smMargin="sizing03"
      mdMargin="sizing06"
      lgMargin="sizing09"
      xsColumnGutter="sizing00"
      smColumnGutter="sizing03"
      mdColumnGutter="sizing06"
      lgColumnGutter="sizing09"
      xsRowGutter="sizing00"
      smRowGutter="sizing03"
      mdRowGutter="sizing06"
      lgRowGutter="sizing09"
    >
      <Cell xs={4} sm={4} md={4} lg={4}>
        <Content color="red">Red</Content>
      </Cell>
      <Cell xs={4} sm={4} md={4} lg={4}>
        <Content color="yellow">Yellow</Content>
      </Cell>
      <Cell xs={4} sm={4} md={4} lg={4}>
        <Content color="green">Green</Content>
      </Cell>
    </Grid>
  </Template>
);

export default Demo;
