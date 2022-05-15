import { createSlice } from "@reduxjs/toolkit";

export const collectionReduxSlice = createSlice({
  name: "collectionRedux",
  initialState: {
    shopCategory: "None",
    barangPerPage: 4,
    currentPage: 1,
    filter: "all",
    favId: new Set()
  },
  reducers: {
    setShopCategory: (state, action) => {
      state.shopCategory = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilter: (state, action) =>{
      state.filter = action.payload;
    },
    setFavId: (state, action) =>{
      let newSet = new Set(action.payload);
      state.favId= newSet;
    },
    addFavId: (state, action) =>{
      let tempSet = structuredClone(state.favId);
      tempSet.add(action.payload);
      state.favId = tempSet;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setShopCategory, setCurrentPage, setFilter, setFavId, addFavId } = collectionReduxSlice.actions;

export default collectionReduxSlice.reducer;
// export const paginateSlice = createSlice({
//     name: 'paginate',
//     initalState: {
//         loadingBlogs: true,
//         dataBlogs: [],
//         currentPage: 1
//     },
//     reducers: {
//         setLoadingBlogs : (state, action) => {
//             state.loadingBlogs = action.payload;
//         },
// setDataBlogs : (state,action) =>{
//     state.dataBlogs = action.payload;
// },
// setCurrentPage : (state, action) => {
//     state.currentPage = action.payload;
// }
//     }
// })

// export const {setLoadingBlogs, setDataBlogs, setCurrentPage} = paginateSlice.actions;

// export default paginateSlice.reducer;
