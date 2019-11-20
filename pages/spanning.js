import React from 'react';
import {Grid, Cell} from 'newskit/grid';
import {H3, styled, getSizingFromTheme, getColorFromTheme} from 'newskit';
import Template from '../components/template';

const Content = styled(H3)`
  border: solid 2px ${getColorFromTheme('supportInformative')};
  text-align: center;
  padding: ${getSizingFromTheme('sizing08')} 0;
`;

const Demo = () => (
  <Template title="Grid Demo - Spanning">
    <Grid>
      <Cell xs={2} sm={2} md={2} lg={2}>
        <Content>1, 2</Content>
      </Cell>
      <Cell xs={3} sm={3} md={3} lg={3}>
        <Content>3, 4, 5</Content>
      </Cell>
      <Cell>
        <Content>6</Content>
      </Cell>
      <Cell>
        <Content>7</Content>
      </Cell>
      <Cell xs={3} sm={3} md={3} lg={3}>
        <Content>8, 9, 10</Content>
      </Cell>
      <Cell xs={2} sm={2} md={2} lg={2}>
        <Content>11, 12</Content>
      </Cell>
    </Grid>
  </Template>
);

export default Demo;
