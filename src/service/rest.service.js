import axios from "axios";
class RestService  {

 getAllEvent() {
  return axios.get('http://3.92.192.76:8000/getAllEvent/');
  }

  getAllPlace(){
    return axios.get('http://3.92.192.76:8000/getAllPlace/');
  }

  womenShape(){
    return axios.get('http://3.92.192.76:8000/womanShape/');
  }

  menShape(){
    return axios.get('http://3.92.192.76:8000/menShape/');
  }

  category(){
    return axios.get('http://3.92.192.76:8000/categoryManagement/')
  }

  addCloth(data){
    return axios.post('http://3.92.192.76:8000/addClothe/',data)
  }

  editClothes(data){
    return axios.post('http://3.92.192.76:8000/editClothe/',data)
  }
  getClothesToShow(){
    return axios.get('http://3.92.192.76:8000/getClothesByBrandAndCategory/')
  }
}

export default RestService;
