import React from "react";
import { connect } from 'react-redux';

class ListItem extends React.Component {
	render() {
		return(
			<div>
				<p>{this.props.myValue}</p>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return ({ myValue: state.todo.value})
}

export default connect(mapStateToProps)(ListItem);