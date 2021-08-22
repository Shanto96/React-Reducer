import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

/**
 * @author
 * @function Reducer
 **/
const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducerr = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went Wrong",
        post: {},
      };
    default:
      return state;
  }
};

const ComponentA = (props) => {
  
   const [state,dispatch] = useReducer(reducerr,initialState);


  useEffect(() =>{
      axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
          dispatch({type:'FETCH_SUCCESS',payload  : response.data})
      })
      .catch( error =>{
          dispatch({type:"FETCH_ERROR"})
      })


  },[])







  return <div>
      
  {state.loading?"Loading": state.post.title}
  { state.error ? state.error : null  }





  </div>;
};

export default ComponentA;
