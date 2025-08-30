import { createSlice } from "@reduxjs/toolkit";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeLocal = () => {
  const theme = localStorage.getItem("theme") || themes.dracula;
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: null,
  theme: getThemeLocal(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const theme =
        state.theme === themes.dracula ? themes.winter : themes.dracula;
      document.documentElement.setAttribute("data-theme", theme);
      state.theme = theme;
      localStorage.setItem("theme", theme);
    },
    loginUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logoutUser: (state) => {
      localStorage.set("user", null);
    },
  },
});

export default userSlice.reducer;
export const { toggleTheme, loginUser, logoutUser } = userSlice.actions;
