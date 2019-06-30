const initialState = {
  textTitle: "", 
  textContext: "", 
  textContent: "",
  complexityLevel: "",
  knowledgeArea: "",
  originLanguage: "",
  translateLanguage: "",
}

const textReducer = (state = initialState, action) => {
  console.log('------------------>', action)
  switch(action.type) {
    case "SUBMIT_TEXT":
      return {
        ...state, ...action.text 
      };
    default:
      return state;
   }
}

export default textReducer;
