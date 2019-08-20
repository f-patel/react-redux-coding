import React, {Component} from "react";
import {connect} from "react-redux";
import { getMoviesList, addOrRemoveItem } from "../actions/moviesAction";

const logo = require("../assets/img/netflixLogo.svg");

class MoviesComponent extends Component {

	constructor(props){
       super(props);
	}

	componentDidMount(){
		this.props.getMoviesList();
	}

	addOrRemoveItem = (item, actionType) => {
		console.log(item, actionType);
		this.props.addOrRemoveItem(item, actionType);
	}



	bindListItems = (item, index, type) => {
		return(
 				<div className="list-item" key={index}>
 				<img className="cover" src={item.img} alt="movie cover" />
 				<p>{item.title}</p>
 				 {type === "myList" && <button className="btn-remove btn-list" onClick={() => {
 				 	this.addOrRemoveItem(item, "removeFromList");
 				 }}>Remove</button>}
 				 {type === "recommended" && <button className="btn-add btn-list" onClick={() => {
 				 	this.addOrRemoveItem(item, "addToList");
 				 }}>Add</button>}
 				</div>
			)
	}

	render(){
			const {mylist, recommendations} = this.props;
			console.log("mylist, recommendations====", mylist, recommendations);
		return(
              <>
              <div className="header">
            	<img src={logo} alt="logo" />
              </div>
              <h1>My List</h1>
              <div className="my-list">
              { mylist.map((item, ind) => (this.bindListItems(item, ind, "myList"))) } 
              {!mylist.length && <p>no data found</p>}
              </div>

              <h1>Recommended List</h1>
             <div className="recommended-list">
			{ recommendations.map((item, ind) => (this.bindListItems(item, ind, "recommended"))) }  
              {!recommendations.length && <p>no data found</p>}
			</div>
              </>
			)
	}
}

export default connect((state) => {
	const {mylist, recommendations} = state.moviesList;
	return {
		mylist,
		recommendations
	}
	}, {
	getMoviesList,
	addOrRemoveItem
	})(MoviesComponent);