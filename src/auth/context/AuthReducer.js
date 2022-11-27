

export const types = {
  login: 'LOGIN',
  logout: 'LOGOUT',
};

// const initialState = {
//   isLogged: false,
//
//  }

export const AuthReducer = (state = {}, action) => {
    switch(action.type) {
        case types.login:
            return {
                ...state,
                isLogged:true,
                user: action.payload
            }

        case types.logout:
            return {
                ...state,
                isLogged:false
            }

        default:
            return state;
    }
};