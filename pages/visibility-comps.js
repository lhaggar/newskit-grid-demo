import React from 'react';
import {Visible, Hidden} from 'newskit/grid';
import {P, H3, styled, getSizingFromTheme, getColorFromTheme} from 'newskit';
import Template from '../components/template';

const Content = styled(H3)`
  border: solid 2px ${getColorFromTheme('supportInformative')};
  text-align: center;
  padding: ${getSizingFromTheme('sizing08')} 0;
  background: ${({color}) => color};
`;

const Demo = () => (
  <Template title="Grid Demo - Visibility Comps">
    <P>"Visible" Component</P>
    <H3>
      Hey! Looks like your device is:{' '}
      <Visible $display="inline" xs>
        very small! ✅
      </Visible>
      <Visible $display="inline" sm>
        small! ✅
      </Visible>
      <Visible $display="inline" md>
        medium! ✅
      </Visible>
      <Visible $display="inline" lg>
        large! ✅
      </Visible>
    </H3>

    <P>"Hidden" Component</P>
    <H3>
      Hey! Looks like your device is not: <Hidden xs>❌ very small</Hidden>
      <Hidden sm>❌ small</Hidden>
      <Hidden md>❌ medium</Hidden>
      <Hidden lg>❌ large</Hidden>
    </H3>
  </Template>
);

export default Demo;
