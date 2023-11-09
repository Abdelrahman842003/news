import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchNews = createAsyncThunk("newsSlice/fetchNews", async () => {
  const url = "https://arabic-news-api.p.rapidapi.com/okaz";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4154c21abdmshdbad7d398a68b86p14d3e3jsn8ef780e89173",
      "X-RapidAPI-Host": "arabic-news-api.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  return result.results;
});
export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export default newsSlice.reducer;
