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

  getClothByBrandAndCat(data){
    return axios.post('http://3.92.192.76:8000/getClothesByBrandAndCategory/',data)
  }

  deleteCloth(data){
    return axios.post('http://3.92.192.76:8000/deleteClothe/',data)
  }

  editCloth(data){
    return axios.post('http://3.92.192.76:8000/editClothe/',data)
  }
  
  getEvent(data){
    return axios.post('http://3.92.192.76:8000/getEventById/',data)
  }

  getPlace(data){
    return axios.post('http://3.92.192.76:8000/getPlaceById/',data)
  }

  getShape(data){
    return axios.post('http://3.92.192.76:8000/getShapeById/',data)
  }

  getBrandName(data){
    return axios.post('http://3.92.192.76:8000/getBrandName/',data)
  }

}                                                  

export default RestService;
