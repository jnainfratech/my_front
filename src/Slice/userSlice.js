import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import axiosInstance from '../Axios/axios'; 
import axios from 'axios';

// Create an async thunk
export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (data) => {   
    // console.log("Dataee =====>",data)
      const response = await axiosInstance.post('/api/register',{name:data.name,hashed_password:data.password,email:data.email})

      return response;
      
    }
  );

  export const loginUser =  createAsyncThunk(
    'user/login',
    async (data,{dispatch}) =>{
      // console.log("data",data)
      const response =  await axiosInstance.post("/api/login",{name:data.name,password:data.password})
      return response
    }
  )
export const logoutUser =  createAsyncThunk(
  'user/logout',
  async()=>{
      sessionStorage.removeItem('accessToken')
  }
  )

  
  const userSlice = createSlice({
    name: 'user',
    initialState: {
      userData: null,
      loading: false,
      error: null,
      status:null
    },
    reducers: {
   
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })

        .addCase(fetchUserData.fulfilled, (state, action) => {
        // console.log("my payload",action.payload)
          state.loading = false;
          state.userData = action.payload.data;
          // localStorage.setItem('accessToken', action.payload.data.access_token);
          localStorage.setItem('accessToken', action.payload.data.access_token);
          state.status = action.payload.status;
          
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(loginUser.pending,(state)=>{
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
          state.loading = false;
          state.userData = action.payload.data;
          // localStorage.setItem('accessToken',action.payload.data.access_token);
          localStorage.setItem('accessToken', action.payload.data.access_token);
          state.status = action.payload.status;
         
        })
        .addCase(loginUser.rejected,(state,action)=>{
          state.loading = false;
          state.error = action.error.message;
        }) 
        .addCase(logoutUser.pending,(state)=>{
          state.loading =  true
          state.error = null
        })
        .addCase(logoutUser.fulfilled,(state)=>{
          state.loading= false;
          state.userData = null;
          state.status = null;

        })
    },
  });
  
  // Export the action creator
  export const { actions: userActions } = userSlice;

  
  // Export the reducer
  export default userSlice.reducer;