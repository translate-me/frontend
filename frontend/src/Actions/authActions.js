import Cookies from "universal-cookie";
import { postData } from "../Utils/Requests";
import history from "../Utils/history";


const cookies = new Cookies();

export const setTokenStatus = isTokenValid => ({
  type: "TOKEN_STATUS",
  isTokenValid
})

export const validateToken = () => {
  return dispatch => {
    dispatch(setTokenStatus("pending"))
    postData('/user/login/api/v0/validate/',
         {token: cookies.get("token") || "token_not_set"},
         (data) => {
           if(data.status === true){
             console.log('token ok')
             dispatch(setTokenStatus("valid"));
             return true
           } else {
             console.log('token n ok')
             dispatch(setTokenStatus("invalid"));
             return false
           }
         },
        (ok) => {console.log(ok)},
        (error) => {console.log(error)})
  }
}

export const login = (credentials) => {
  return dispatch => {
    postData('/user/login/api/v0/login/',
         credentials,
         (data) => {
           cookies.set('token', data.token)
           dispatch(setTokenStatus("valid"));
           history.push("/")
         },
        (error) => {console.log(error)})
  }
}
