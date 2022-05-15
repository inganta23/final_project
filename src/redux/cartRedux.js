import { createSlice } from "@reduxjs/toolkit";

export const cartReduxSlice = createSlice({
  name: "cartRedux",
  initialState: {
    cartPerPage: 5,
    currentPage: 1,
    update: { id: "", kuantitas: "", nama: "" },
    edit: false,
    kuantitas: 0,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setUpdate: (state, action) => {
      state.update = action.payload;
    },
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
    setKuantitas: (state, action) => {
      state.kuantitas = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage, setUpdate, setEdit, setKuantitas } =
  cartReduxSlice.actions;

export default cartReduxSlice.reducer;
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
