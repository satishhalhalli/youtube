const { createSlice } = require("@reduxjs/toolkit");

// const appSlice=createSlice({
//     name : 'app',
//     initialState:{
//     isMenuopen: false,
//     },

//     reducers:{
//         toggleMenu:(state)=>{
//             state.isMenuopen = !state.isMenuopen;
//         },
//     }
// });
const appSlice = createSlice({
    name: 'app',
    initialState: {
      isMenuOpen: false,
    },
    reducers: {
      toggleMenu: (state) => {
        state.isMenuOpen = !state.isMenuOpen;
      },

      closeMenu:(state)=>{
        state.isMenuOpen= false;
      }
    },
  });
export const {toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;