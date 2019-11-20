import React from 'react';
import {Grid, Cell} from 'newskit/grid';
import {H3, styled, getSizingFromTheme, getColorFromTheme} from 'newskit';
import Template from '../components/template';

const Content = styled(H3)`
  border: solid 2px ${getColorFromTheme('supportInformative')};
  text-align: center;
  padding: ${getSizingFromTheme('sizing08')} 0;
  background: ${({color}) => color};
`;

const Demo = () => (
  <Template title="Grid Demo - Cell Visibility">
    <Grid>
      <Cell xsHidden sm={6} md={4} lg={4}>
        <Content color="lightblue">xsHidden</Content>
      </Cell>
      <Cell xsHidden smHidden md={4} lg={4}>
        <Content color="lightgreen">xsHidden smHidden</Content>
      </Cell>
      <Cell xsHidden smHidden mdHidden lg={4}>
        <Content color="palevioletred">xsHidden smHidden mdHidden</Content>
      </Cell>
      <Cell xs={12} sm={6} md={4} lgHidden>
        <Content color="lightgoldenrodyellow">lgHidden</Content>
      </Cell>
    </Grid>
  </Template>
);

export default Demo;
