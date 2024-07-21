import axios from 'axios';

class CartService{
    static getCart(id){
        return axios.get(`/get-cart/${id}`);
      }
    
    static getItem(id){
    return axios.get(`/get-item/${id}`);
    }

    static updateQuantity(id, quantity){
    return axios.put(`/update/${id}`, quantity);
    }

    static addItem(data){
        return axios.put(`/add`, data);
    }

    static deleteItem(id){
    return axios.delete(`/delete/${id}`);
    }
};

export default CartService;