import React from 'react';
import { Button } from "reactstrap";
import { connect } from "react-redux";

class ButtonAction extends React.Component {
  add() {
    this.props.dispatch({
      type: 'up',
    })
  }
  sub() {
    this.props.dispatch({
      type: 'down',
    })
  }
  render() {
    return(
			<div>
				<Button color="primary" onClick={this.add.bind(this)} >{'+'}</Button>{' '}
        <Button color="secondary" onClick={this.sub.bind(this)}>{'-'}</Button>{' '}
			</div>
		)
  }
}

export default connect()(ButtonAction);