import { useReducer } from 'react';
import { AuthContext } from "./AuthContext"
import { types, AuthReducer } from "./AuthReducer"

export const AuthProvider = ({children}) => {


    const initArgs = () => {
        const user = JSON.parse(sessionStorage.getItem("user"));
            return{
                isLogged: !!user,
                user,
            }
    }

    const [authState, dispatch] = useReducer(AuthReducer, {}, initArgs)

    const login = (loginUser= {}) => {
        console.log(loginUser)

        sessionStorage.setItem('user', JSON.stringify(loginUser));

    dispatch({
      type: types.login,
      payload: loginUser,
    });
  };
    

  return (
    <AuthContext.Provider value={{
        ...authState,
        login,
        logout,
    }}
    >
        {children}
    </AuthContext.Provider>
  )
}
