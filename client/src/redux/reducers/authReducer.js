import { createSlice } from "@reduxjs/toolkit";
const adminStorage = localStorage.getItem("admin-token");
import jwtDecode from "jwt-decode";

function verifyToken() {
  if (adminStorage) {
    const decodeToken = jwtDecode(adminStorage);
    const expiresIn = new Date(decodeToken.exp * 1000);
    if (new Date() > expiresIn) {
      localStorage.removeItem("admin-token");
      return null;
    } else {
      return adminStorage;
    }
  }
  return null;
}
const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    adminToken: verifyToken(),
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
  },
});
export const { setAdminToken } = authReducer.actions;
export default authReducer.reducer;
