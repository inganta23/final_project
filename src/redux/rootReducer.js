import { combineReducers } from "@reduxjs/toolkit";

import paginateReducer from "./paginate";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  paginate: paginateReducer
});

export default rootReducer;
