import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './index.css';

export default (props) => (
  <MuiThemeProvider>
  <div className="add-button-container">
    <FloatingActionButton onClick={props.onClick}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
  </MuiThemeProvider>
)
