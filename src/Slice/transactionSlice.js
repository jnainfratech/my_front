import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import axiosInstance from '../Axios/axios'; 
import axios from 'axios';


export const initateTrans  = createAsyncThunk(
    'trans/initateTrans',
    async (data) => {   
    console.log("Dataee =====>",data)
      const response = await axiosInstance.post('/transactions/',data)

      return response;
      
    }
  );

const transactionSlice = createSlice({ 
    name: 'transaction',
    initialState: {
        transData: null,
        loading: false,
        error: null,
        status:null
      },
    reducers : {

    },extraReducers:(builder)=>{
        builder 
        .addCase(initateTrans.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(initateTrans.fulfilled, (state,action) => {
            state.loading = false;
            state.transData = action.payload.data
            state.error = null;
          })
          .addCase(initateTrans.rejected, (state) => {
            state.loading = true;
            state.error = null;
          })
    }
})

  // Export the action creator
  export const { actions: transActions } = transactionSlice;
  
  // Export the reducer
  export default transactionSlice.reducer;