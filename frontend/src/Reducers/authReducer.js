const authReducer = (state = {isTokenValid: "pending"}, action) => {
  switch(action.type) {
    case "TOKEN_STATUS":
      return {
        isTokenValid: action.isTokenValid
      };
    default:
      return state;
   }
}

export default authReducer;
