import { LOG_OFF, LOG_USER } from "./types";
import UserService from "../services/userService";

//Asynchronous action creator for user login
export const logUser = (data) => async(dispatch) => {
    try{
        const response = await UserService.getCart(data);
        dispatch({
            type: LOG_USER,
            payload: response.data
        });
    }catch(error){
        console.error("Error fetching user details", error);
    }
}

//Asynchronous action creator to log user off
export const logOff = () => async(dispatch) => {
    try{
        await UserService.logOff();
        dispatch({
            type: LOG_OFF,
            payload: {}
        });
    }catch(error){
        console.error("Error logging user off", error);
    }
}
