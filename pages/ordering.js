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
  <Template title="Grid Demo - Ordering">
    <Grid>
      <Cell
        xs={3}
        sm={3}
        md={3}
        lg={3}
        xsOrder={10}
        smOrder={10}
        mdOrder={10}
        lgOrder={10}
      >
        <Content color="red">Red</Content>
      </Cell>
      <Cell
        xs={3}
        sm={3}
        md={3}
        lg={3}
        xsOrder={20}
        smOrder={20}
        mdOrder={20}
        lgOrder={20}
      >
        <Content color="yellow">Yellow</Content>
      </Cell>
      <Cell
        xs={3}
        sm={3}
        md={3}
        lg={3}
        xsOrder={30}
        smOrder={30}
        mdOrder={30}
        lgOrder={30}
      >
        <Content color="green">Green</Content>
      </Cell>
      <Cell
        xs={3}
        sm={3}
        md={3}
        lg={3}
        xsOrder={5}
        smOrder={15}
        mdOrder={25}
        lgOrder={35}
      >
        <Content color="lightblue">Blue</Content>
      </Cell>
    </Grid>
  </Template>
);

export default Demo;
