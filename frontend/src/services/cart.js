import axios from 'axios';

class CartService{
    static getAll(){
        return axios.get("/get-cart");
      }
    
    static get(id){
    return axios.get(`/get/${id}`);
    }

    static update(id, data){
    return axios.put(`/update/${id}`, data);
    }

    static deleteItem(id){
    return axios.delete(`/delete/${id}`);
    }
};

export default CartService;