import {AuthContext} from "./AuthContext"
import { AuthReducer } from "./AuthReducer";

export const AuthProvider = ({children}) => {

  const initalState = {
    isLogged: false,
    /* user, */
  }


  export const [authState, dispatch] = useReducer(AuthReducer, {}, initArgs);

  const login = () => {}
video 1.16 
  return (
  
    <AuthContext.Provider value={[authState]}>
      {children}
    </AuthContext.Provider>
  )
}


