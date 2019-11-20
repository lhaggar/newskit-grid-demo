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
  <Template title="Grid Demo - Nesting">
    <Grid>
      <Cell xs={12} sm={12} md={6} lg={6}>
        <Content>
          1
          <Grid lgColumnGutter="sizing00" lgMargin="sizing00">
            <Cell xs={12} sm={12} md={6} lg={6}>
              <Content>1.1</Content>
            </Cell>
            <Cell xs={12} sm={12} md={6} lg={6}>
              <Content>1.2</Content>
            </Cell>
          </Grid>
        </Content>
      </Cell>
      <Cell xs={12} sm={12} md={6} lg={6}>
        <Content>
          2
          <Grid>
            <Cell xs={12} sm={12} md={6} lg={6}>
              <Content>
                2.1
                <Grid>
                  <Cell xs={12} sm={12} md={6} lg={6}>
                    <Content>2.1.1</Content>
                  </Cell>
                  <Cell xs={12} sm={12} md={6} lg={6}>
                  <Content>2.1.2</Content>
                  </Cell>
                </Grid>
              </Content>
            </Cell>
            <Cell xs={12} sm={12} md={6} lg={6}>
              <Content>
              2.2
                <Grid>
                  <Cell xs={12} sm={12} md={6} lg={6}>
                  <Content>2.2.1</Content>
                  </Cell>
                  <Cell xs={12} sm={12} md={6} lg={6}>
                  <Content>2.2.2</Content>
                  </Cell>
                </Grid>
              </Content>
            </Cell>
          </Grid>
        </Content>
      </Cell>
    </Grid>
  </Template>
);

export default Demo;
