const initialData = {
    signIn: {token: ""},
    basicDetails: {firstName:"", lastName:"", address:"", city:""}
  }
  export default function(state=initialData, action){
    switch (action.type) {
      case "signIn":
        return {...state, signIn: action.payload};
      case "basicDetails":
        return {...state, basicDetails: action.payload};
      default:
        return state;
    }
  }