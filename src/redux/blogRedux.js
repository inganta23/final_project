import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    loadingBlogs: true,
    dataBlogs: [],
    currentPage: 1,
    postsPerPage: 6
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
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLoadingBlogs, setDataBlogs, setCurrentPage, setShopCategory } = blogSlice.actions;

export default blogSlice.reducer;
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
