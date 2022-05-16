import { combineReducers } from "@reduxjs/toolkit";

import blogReduxReducer from "./blogRedux";
import collectionReduxReducer from "./collectionRedux";
import commentReduxReducer from "./commentRedux";
import cartReduxReducer from "./cartRedux";
import favoriteReduxReducer from "./favoriteRedux";

const rootReducer = combineReducers({
  blogRedux: blogReduxReducer,
  collectionRedux: collectionReduxReducer,
  commentRedux: commentReduxReducer,
  cartRedux: cartReduxReducer,
  favoriteRedux: favoriteReduxReducer
});

export default rootReducer;
