const initialState= {
    list:[],
    activeId:null
}

const hobbyReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'ADD_HOBBY':
            const newList=[...state.list];
            newList.push(action.payload);
            return {...state,
                list:newList,
            };
        case 'DELETE_HOBBY':
            const newLists=[...state.list];
            return {...state,
                list:newLists.filter((element,index) => {
                    return index !== action.payload;
                    }),
            };
        default:
            return state;
    }
}


export default hobbyReducer;