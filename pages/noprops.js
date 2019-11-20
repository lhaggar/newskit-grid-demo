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
  <Template title="Grid Demo - No Props">
    <Grid>
      <Cell><Content>1</Content></Cell>
      <Cell><Content>2</Content></Cell>
      <Cell><Content>3</Content></Cell>
      <Cell><Content>4</Content></Cell>
      <Cell><Content>5</Content></Cell>
      <Cell><Content>6</Content></Cell>
      <Cell><Content>7</Content></Cell>
      <Cell><Content>8</Content></Cell>
      <Cell><Content>9</Content></Cell>
      <Cell><Content>10</Content></Cell>
      <Cell><Content>11</Content></Cell>
      <Cell><Content>12</Content></Cell>
    </Grid>
  </Template>
)

export default Demo;
