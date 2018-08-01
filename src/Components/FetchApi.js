import React, { Component } from 'react';
import FetchItem from './FetchItem.js';


class FetchApi extends Component {
	
	render(){

	return(
		<div className="container">
		<div className="hallo">
		    <form className="row col s12">
		        <div className="input-field col s6">
		          	<input id="icon_prefix" type="text"
		          		placeholder="city name" 
		          		className="validate" 
		          		onChange={this.props.handleChange}
		          		value={this.props.city} />
		        </div>
			</form>
		</div>
			<button className="btn waves-effect waves-light" type="submit" onClick={this.props.handleAdd}>Submit
			</button>
			{this.props.inputdata && <FetchItem item={this.props.inputdata} />}
		</div>

		);
	}
}

export default FetchApi;
