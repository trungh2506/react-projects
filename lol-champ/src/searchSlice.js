import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    handleSearch: (state, action) => {
      return action.payload
        .toLowerCase() // Chuyển đổi tất cả thành chữ thường để chuẩn hóa
        .split(" ") // Tách chuỗi thành mảng các từ
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Viết hoa chữ cái đầu của từng từ
        .join(" "); // Gộp lại thành chuỗi mới
    },
  },
});
export const { handleSearch } = searchSlice.actions;
export default searchSlice.reducer;
