import React from 'react';
import {Grid, Cell} from 'newskit/grid';
import {P, H3, styled, getSizingFromTheme, getColorFromTheme} from 'newskit';
import Template from '../components/template';

const Content = styled(H3)`
  border: solid 2px ${getColorFromTheme('supportInformative')};
  text-align: center;
  padding: ${getSizingFromTheme('sizing08')} 0;
`;

const Demo = () => (
  <Template title="Grid Demo - Varied Span">
    <P>Spanning 12, 6, 3 and 2 at XS, SM, MD, LG</P>
    <Grid>
      <Cell xs={12} sm={6} md={3} lg={2}>
        <Content>Lorem ipsum</Content>
      </Cell>
      <Cell xs={12} sm={6} md={3} lg={2}>
        <Content>dolor sit amet</Content>
      </Cell>
      <Cell xs={12} sm={6} md={3} lg={2}>
        <Content>consectetur adipiscing</Content>
      </Cell>
      <Cell xs={12} sm={6} md={3} lg={2}>
        <Content>elit sed do eiusmod</Content>
      </Cell>
    </Grid>
  </Template>
);

export default Demo;
