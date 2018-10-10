import React from 'react';
import { Route } from 'react-router-dom'
import Bubbles from '../bubbles'

import './index.css';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Bubbles} />
    </main>
  </div>
)

export default App
