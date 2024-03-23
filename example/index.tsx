import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CardCarousel } from '../.';

const App = () => {
  return (
    <div>
      <CardCarousel />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
