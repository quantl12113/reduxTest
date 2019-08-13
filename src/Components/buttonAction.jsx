import React from 'react';
import { Button } from "reactstrap";
import { connect } from "react-redux";

class ButtonAction extends React.Component {
  add() {
    this.props.dispatch({
      type: 'up',
    })
  }
  down() {
    this.props.dispatch({
      type: 'down',
    })
  }
  render() {
    return(
			<div>
        {console.log(this.props)}
				<Button color="primary" onClick={this.add.bind(this)} >{'+'}</Button>{' '}
        <Button color="secondary">{'-'}</Button>{' '}
			</div>
		)
  }
}

export default connect()(ButtonAction);