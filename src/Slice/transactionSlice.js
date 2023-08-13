import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import axiosInstance from '../Axios/axios'; 
import axios from 'axios';


export const initateTrans  = createAsyncThunk(
    'trans/initateTrans',
    async (data) => {   
    console.log("Dataee =====>",data)
      const response = await axiosInstance.post('/transactions',data)

      return response;
      
    }
  );
  export const getUserTransaction  = createAsyncThunk(
    'trans/getUserTransaction',
    async (data) => {   
    // console.log("Dataee =====>",data)
      const response = await axiosInstance.get('/user_transactions')

      return response;
      
    }
  );
  export const checkStatusTransaction = createAsyncThunk(
    'trans/getstatus',
    async (data) =>{
      const response = await axiosInstance.get(`/poll_payment/${data}`)
      return response;
    }
  )

const transactionSlice = createSlice({ 
    name: 'transaction',
    initialState: {
        transData: null,
        loading: false,
        error: null,
        status:null,
        userData : {
          data:null,
          error:null,
          loading:false,
  
        },
        checkstatus:{
          data:null,
          error:null,
          loading:false
        }
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
          .addCase(initateTrans.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(getUserTransaction.pending,(state)=>{
            state.userData.loading=false;
            state.error = null;

          })
          .addCase(getUserTransaction.fulfilled,(state,action)=>{
            state.userData.loading = false;
            state.userData.data = action.payload.data
            state.userData.error = null;
          })
          .addCase(getUserTransaction.rejected,(state,action)=>{
            state.userData.loading=false;
            state.userData.data = action.payload;
          })
          .addCase(checkStatusTransaction.pending,(state)=>{
            state.checkstatus.loading=false;
            state.error = null;

          })
          .addCase(checkStatusTransaction.fulfilled,(state,action)=>{
            state.checkstatus.loading = false;
            state.checkstatus.data = action.payload.data
            state.checkstatus.error = null;
          })
          .addCase(checkStatusTransaction.rejected,(state,action)=>{
            state.checkstatus.loading=false;
          })
    }
})

  // Export the action creator
  export const { actions: transActions } = transactionSlice;
  
  // Export the reducer
  export default transactionSlice.reducer;