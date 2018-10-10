import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import {
  openForm,
  addBubble,
  updateName,
  updateColor,
  closeForm
} from '../../modules/bubbleMaker'

import './index.css'

const mapStateToProps = state => ({
  formOpen: state.bubbleMaker.formOpen,
  name: state.bubbleMaker.name,
  color: state.bubbleMaker.color,
  nameError: state.bubbleMaker.nameError
})

const mapDispatchToProps = dispatch => bindActionCreators({
  openForm,
  addBubble,
  updateName,
  updateColor,
  closeForm
}, dispatch)

const Form = props => (
  <MuiThemeProvider>
    <Dialog
      title="Add your bubble"
      actions={[]}
      modal={false}
      open={props.formOpen}
      onRequestClose={props.closeHandler}
    >
    <div className="formContainer">
      <TextField
        hintText="Name"
        floatingLabelText="Enter your first name only"
        floatingLabelFixed={true}
        value={props.name}
        onChange={props.updateName}
        errorText={props.nameError}
        className="nameBox"
      />
      <div className="colorGroupContainer">
        <Subheader>Whats your favorite color?</Subheader>
        <RadioButtonGroup name="color" defaultSelected="{props.color}" onChange={props.updateColor} className="colorGroup">

          <RadioButton
            value="#f44336"
            className="colorGroupItem"
            iconStyle={{fill: '#f44336'}}
          />
          <RadioButton
            value="#E040FB"
            className="colorGroupItem"
            iconStyle={{fill: '#E040FB'}}
          />
          <RadioButton
            value="#E91E63"
            className="colorGroupItem"
            iconStyle={{fill: '#E91E63'}}
          />
          <RadioButton
            value="#9C27B0"
            className="colorGroupItem"
            iconStyle={{fill: '#9C27B0'}}
          />
          <RadioButton
            value="#3F51B5"
            className="colorGroupItem"
            iconStyle={{fill: '#3F51B5'}}
          />
          <RadioButton
            value="#2196F3"
            className="colorGroupItem"
            iconStyle={{fill: '#2196F3'}}
          />
          <RadioButton
            value="#00BCD4"
            className="colorGroupItem"
            iconStyle={{fill: '#00BCD4'}}
          />
          <RadioButton
            value="#4CAF50"
            className="colorGroupItem"
            iconStyle={{fill: '#4CAF50'}}
          />
          <RadioButton
            value="#CDDC39"
            className="colorGroupItem"
            iconStyle={{fill: '#CDDC39'}}
          />
          <RadioButton
            value="#FFEB3B"
            className="colorGroupItem"
            iconStyle={{fill: '#FFEB3B'}}
          />
          <RadioButton
            vale="#FF9800"
            className="colorGroupItem"
            iconStyle={{fill: '#FF9800'}}
          />
        </RadioButtonGroup>
      </div>
    </div>
    <div className="modalNav">
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={props.closeForm}
    />
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onClick={props.addBubble.bind(this, {name: props.name, color: props.color})}
    />
    </div>
    </Dialog>
  </MuiThemeProvider>
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
