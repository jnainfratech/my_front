import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import axiosInstance from '../Axios/axios'; 
import axios from 'axios';

export const check = createAsyncThunk(
    'structure/check',
    async (data) =>{
        const response =  axiosInstance.post('/api/checkvalue',data)
        return response
    }
)

export const recheck = createAsyncThunk(
    'structure/recheck',
    async(data)=>{
        // console.log("mydata============>en recheck",data)
        const response = axiosInstance.post('/api/recheck',data)
        return response
    }
)
export const genrate = createAsyncThunk(
    'structure/genrate',
    
    async(data)=>{
        // console.log("Data send in genrate",data)
        const response = await axiosInstance.post('/genrate',data, { responseType: 'blob' })
        const url = window.URL.createObjectURL(new Blob([response.data]));
        // console.log("data in res",response)
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'output.zip');
        document.body.appendChild(link);
        link.click();
        link.remove();
  
        return true;
    }  
)


const structureSlice = createSlice({
    name:"structure",
    initialState: {
        structureData: null,
        loading: false,
        error: null,
        status:null
      },
      reducers:{

      },extraReducers:(builder)=>{
        builder
        .addCase(check.pending,(state)=>{
            state.loading = true;
            state.error =  null;
        })
        .addCase(check.fulfilled,(state,action)=>{
            state.loading = false;
            state.structureData = action.payload.data
        })
        .addCase(check.rejected,(state,action)=>{
            state.loading= false;
            state.error = action.error.message
        })
        .addCase(recheck.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(recheck.fulfilled,(state,action)=>{
            state.loading =  false;
            state.structureData = action.payload.data
        })
        .addCase(recheck.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(genrate.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(genrate.fulfilled,(state,action)=>{
            state.loading =  false;
            state.structureData = null
        })
        .addCase(genrate.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
      }
})

export const { actions: structureActions } = structureSlice;

  
// Export the reducer
export default structureSlice.reducer;
