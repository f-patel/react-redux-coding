const data = require("../assets/data/movieList.json");

 export const getMoviesList = () =>{
 	return {
 		 type: "GET_MOVIES_LIST",
         payload: data
 	}
 }

 export const addOrRemoveItem = (item, type) => {
 	return {
 		 type: "CHANGE_MOVIES_LIST",
         payload: {
         	item,
         	type
         }
 	}
 }