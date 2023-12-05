import { createSlice } from "@reduxjs/toolkit";

const obtenerValorCookie = (nombreCookie, valorPredeterminado) => {
  const valorJson = localStorage.getItem(nombreCookie);
  return valorJson ? JSON.parse(valorJson) : valorPredeterminado;
};
const valorInicial = obtenerValorCookie("userData", []);
export const userSlice = createSlice({
  name: "user",
  initialState: valorInicial,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUsuer: (state, action) => {
      state.shift();
      localStorage.removeItem("userData");
    },
  },
});
export const { addUser, deleteUsuer } = userSlice.actions;
export default userSlice.reducer;
