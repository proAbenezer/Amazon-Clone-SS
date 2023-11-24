import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateContext, StateProvider } from './ContextApi/StateProvider.jsx'

//Context 
import { initialState, reducer } from './ContextApi/reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider
      initialState={initialState}
      reducer={reducer}
    >
      <App />
    </StateProvider>
  </React.StrictMode>,
)
export const useStateValue = () => useContext(StateContext)