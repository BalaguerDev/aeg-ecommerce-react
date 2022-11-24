import React from 'react'
import { types } from "../types/types"


const initalState = {
  isLogged: false,
  user,
}


export const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.login:           //CASO 1: USUARIO SE LOGEA
      return {
        ...state,
        isLogged:true,
        user: action.payload,
      };

    case types.logout:          //CASO 2: USUARIO CIERRA SESION
      return {
        ...state,
        isLogged:false,

      };

        default:
      return state
  }

  )
}

