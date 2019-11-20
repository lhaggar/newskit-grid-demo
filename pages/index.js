import React from 'react';
import {H1, H3, Link} from 'newskit';
import Template from '../components/template';

const Home = () => (
  <Template title="NewsKit - Grid">
    <H3>
      <Link href="noprops">No Props</Link>
    </H3>
    <H3>
      <Link href="spanning">Spanning</Link>
    </H3>
    <H3>
      <Link href="varied-span">Varied Span</Link>
    </H3>
    <H3>
      <Link href="cell-visibility">Cell Visibility</Link>
    </H3>
    <H3>
      <Link href="visibility-comps">Visibility Components</Link>
    </H3>
    <H3>
      <Link href="ordering">Ordering</Link>
    </H3>
    <H3>
      <Link href="overriding">Overriding</Link>
    </H3>
    <H3>
      <Link href="nesting">Nesting</Link>
    </H3>
  </Template>
);

export default Home;
