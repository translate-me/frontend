import Cookies from "universal-cookie";
import { post } from "../Auth/Auth";

const cookies = new Cookies();

export const setTokenStatus = isTokenValid => ({
  type: "TOKEN_STATUS",
  isTokenValid
})

export const validateToken = () => {
  return dispatch => {
    post('user/user/login/api/v0/login/',
         {token: cookies.get("token")},
         (data) => {
           if(data.detail === true){
             dispatch(setTokenStatus(true));
           }  
           dispatch(setTokenStatus(false));
         },
        (error) => {console.log(error)})
  }
}
