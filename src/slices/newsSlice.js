import { createSlice, createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import Axios from 'axios';

export const fetchData = createAsyncThunk('get', async () => {
    const response = await Axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=97e7732536a74e37bc3966fe6440a858');
    return response.data;
})

const initialState = {
    news : [],
    loading: false,
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state,action) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state,action) => {
                state.loading = false;
                state.news =action.payload;
            })
            .addCase(fetchData.rejected, (state,action) => {
                state.loading = false;
            });
    }
})

export default newsSlice.reducer;