import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const obtenerValorCookie = (nombreCookie, valorPredeterminado) => {
  const valorCookie = Cookies.get(nombreCookie);
  return valorCookie ? JSON.parse(valorCookie) : valorPredeterminado;
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
      Cookies.remove("userData");
    },
  },
});
export const { addUser, deleteUsuer } = userSlice.actions;
export default userSlice.reducer;
