import axios from 'axios';

class UserService{
    static logUser(data){
        return axios.get(`/log-user/`, data);
    }
    
    static logOff(){
        return axios.get(`/log-off`);
    }

    static registerUser(data){
        return axios.delete(`/register/`, data);
    }
};

export default UserService;