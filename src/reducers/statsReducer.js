const statsReducer = (state=[], action)=>{ 
    switch(action.type){            
        case 'SAVE_STATS' :
            return [...state, action.payload];
        default : return state
    }
};

export default statsReducer;