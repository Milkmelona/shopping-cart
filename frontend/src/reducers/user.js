import {
    LOG_OFF,
    LOG_USER
} from "../actions/types";

const initialState = {
    user: {
        id: null,
        first_name:"",
        last_name: "",
        email: "",
        password: ""
    }
};

const userReducer = (state = initialState, action) =>{
    const {type, payload} = action;

    switch(type){
        case LOG_USER:
            return{
                ...state, 
                user: payload,
                isAuthenticated: true
            };
        case LOG_OFF:
            return {
                ...state, 
                user: payload,
                isAuthenticated: false
            }
        default:
            return state;
    };
}

export default userReducer;