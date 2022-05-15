import { createSlice } from "@reduxjs/toolkit";

export const commentReduxSlice = createSlice({
  name: "commentRedux",
  initialState: {
    commentPerPage: 4,
    currentPage: 1,
    editId: "",
    insert: {
      komen: "",
      pengarang: "",
    },
    editComment: {
      komen: "",
      pengarang: "",
    },
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    setInsert: (state, action) => {
      state.insert = action.payload;
    },
    setEditComment: (state, action) => {
      state.editComment = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage, setEditId, setInsert, setEditComment } =
  commentReduxSlice.actions;

export default commentReduxSlice.reducer;
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
