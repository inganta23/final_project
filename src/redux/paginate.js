import { createSlice } from "@reduxjs/toolkit";

export const paginateSlice = createSlice({
  name: "paginate",
  initialState: {
    loadingBlogs: true,
    dataBlogs: [],
    currentPage: 1,
    postsPerPage: 6,
    shopCategory: "None"
  },
  reducers: {
    
    setLoadingBlogs: (state, action) => {
      state.loadingBlogs = action.payload;
    },
    setDataBlogs : (state,action) =>{
        state.dataBlogs = action.payload;
    },
    setCurrentPage : (state, action) => {
        state.currentPage = action.payload;
    },
    setShopCategory : (state, action) => {
      state.shopCategory = action.payload;
  }
  },
});

// Action creators are generated for each case reducer function
export const { setLoadingBlogs, setDataBlogs, setCurrentPage, setShopCategory } = paginateSlice.actions;

export default paginateSlice.reducer;
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
