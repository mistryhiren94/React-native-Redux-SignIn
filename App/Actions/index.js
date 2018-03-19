//all actions are defined here

export function signIn() {
    return {
      type: 'signIn'
    }
}

export function setBasicDetails(payload) {
    return {
        type: "basicDetails",
        payload
    }
}
  
export function resetSignUpForm() {
    return {
      type: 'resetSignUpForm'
    }
}

export function resetSignUpFormStatus() {
    return {
      type: 'resetSignUpFormStatus'
    }
  }
  