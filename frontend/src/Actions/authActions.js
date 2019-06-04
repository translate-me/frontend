import Cookies from "universal-cookie";
import { postData } from "../Utils/Requests";

const cookies = new Cookies();

export const setTokenStatus = isTokenValid => ({
  type: "TOKEN_STATUS",
  isTokenValid
})

export const validateToken = () => {
  return dispatch => {
    postData('user/user/login/api/v0/validade/',
         {token: cookies.get("token")},
         (data) => {
           if(data.detail === true){
             dispatch(setTokenStatus(true));
           }  
           dispatch(setTokenStatus(false));
         },
        (ok) => {console.log(ok)},
        (error) => {console.log(error)})
  }
}

export const login = (credentials) => {
  return dispach => {
    postData('/user/login/api/v0/login/',
         credentials,
         (data) => {
           console.log('----------------')
           console.log(data)
         },
        (error) => {console.log('00000000',error)})
  }
}
