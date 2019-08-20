
const initStateData = {
	mylist: [],
	recommendations: []
}

const getItemIndex = (arr, id) => {
	return arr.findIndex(item => item.id === id);
}

const movieDetailsReducer = (state = initStateData, action) => {
	switch (action.type) {
		case "GET_MOVIES_LIST": {
			const {mylist, recommendations} = action.payload
			return {
				...state,
				mylist,
				recommendations
			}
		}
		case "CHANGE_MOVIES_LIST": { 
			const {item, type} = action.payload;
			let {mylist, recommendations} = state;
			if(type === "removeFromList"){
				const currentInd = getItemIndex(mylist, item.id);
				const splicedItem = mylist.splice(currentInd, 1);
				 recommendations = [...recommendations, ...splicedItem];
			} else if(type === "addToList"){
				const currentInd = getItemIndex(recommendations, item.id);
				const splicedItem = recommendations.splice(currentInd, 1);
				 mylist = [...mylist, ...splicedItem];
			}
			return {
				...state,
				mylist,
				recommendations
			}

		}
		default: 
		   return state;
	}
}

export default movieDetailsReducer;