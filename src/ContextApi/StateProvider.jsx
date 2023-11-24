import { useReducer, createContext } from "react";

//This Data layer 
export const StateContext = createContext()

//Build A provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)