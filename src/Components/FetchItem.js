import React, { Component } from 'react';


class FetchItem extends Component {
	render(){
		const list = this.props.item.list[0];
		return(
			<div className="weather-box">
			 	<div className="card" id="cardtitle">
			 		<img className="icon" src={`http://openweathermap.org/img/w/${list.weather[0].icon}.png`}/>
			 			<h5 className="collection-item">{this.props.item.city.name}</h5>
			 			<span className="weather-description">{list.weather[0].description} | </span>  
			 												 {parseInt(list.main.temp, 10)}°C
			 			<br/><br/>
			 			<p className="etc">
	      				<i className="material-icons">toys</i>{list.wind.speed}Km/h<br/>
	      				<i className="material-icons">spa</i>{list.main.humidity}%<br/><br/> 
	      				</p> 
			 	</div>		
    		</div>	 
		);
	}
}

export default FetchItem;