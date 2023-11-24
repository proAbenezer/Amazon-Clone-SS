import React, { useEffect, useReducer } from "react";
import { INITIAL_VALUE, reducer } from "./ReducerFunc";
import axios from "axios";
function useAxios(BASE_URL) {
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);

  useEffect(() => {
    function FetchData() {
      dispatch({ type: "FETCHING__INIT" });
      axios
        .get(BASE_URL)
        .then((response) => {
          console.log(response);
          dispatch({ type: "FETCHING_SUCCESS", payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: "FETCHING_FAILED", err: error });
        });
    }
    FetchData();
  }, []);

  return state;
}

export default useAxios;
