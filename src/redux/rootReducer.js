import { combineReducers } from "@reduxjs/toolkit";

import paginateReducer from "./paginate";
import collectionReduxReducer from "./collectionRedux";
import commentReduxReducer from "./commentRedux";
import cartReduxReducer from "./cartRedux";
import favoriteReduxReducer from "./favoriteRedux";

const rootReducer = combineReducers({
  paginate: paginateReducer,
  collectionRedux: collectionReduxReducer,
  commentRedux: commentReduxReducer,
  cartRedux: cartReduxReducer,
  favoriteRedux: favoriteReduxReducer
});

export default rootReducer;
