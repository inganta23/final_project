import { createSlice } from "@reduxjs/toolkit";

export const favoriteReduxSlice = createSlice({
  name: "favoriteRedux",
  initialState: {
    favoritePerPage: 5,
    currentPage: 1
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage } =
  favoriteReduxSlice.actions;

export default favoriteReduxSlice.reducer;
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
