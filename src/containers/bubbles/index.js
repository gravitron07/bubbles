import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  openForm,
  popBubble

} from '../../modules/bubbleMaker'

import AddBubbleButton from '../../components/addBubbleButton'
import AddBubbleForm from '../../components/addBubbleForm'
import Bubble from '../../components/bubble'

const Bubbles = props => (
  <div>
    <AddBubbleButton onClick={props.openForm}>Add bubble</AddBubbleButton>
    <AddBubbleForm />
    {
      props.bubbles.map((bubble, i) => {
        return <Bubble key = {bubble.id} bubbleId={bubble.id} color={bubble.color} name={bubble.name} clickHandler={props.popBubble} />
      })
    }
  </div>
)

const mapStateToProps = state => ({
  formOpen: state.bubbleMaker.formOpen,
  name: state.bubbleMaker.name,
  color: state.bubbleMaker.color,
  bubbles: state.bubbleMaker.bubbles
})

const mapDispatchToProps = dispatch => bindActionCreators({
  openForm,
  popBubble
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bubbles)
