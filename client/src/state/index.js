import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode:"light",
    user: null,
    token:null,
    posts:[]
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducer:{
        setMode: (state)=>{
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    },

    setLogin: (state,action) =>{
        state.user = action.payload.user;
        state.token = action.payload.token;
    },

    setLogout: (state,action) => {
        state.user = null;
        state.token = null;
    },

    setFriends: (state,action) => {
        if(state.user){
            state.user.friends = action.payload.friends;
        }else{
            console.error("user friends has no friends");
        }
    },

    setPosts:(state,action) =>{
        state.posts = action.payload.posts;
    },

    setPost: (state,action) =>{
        const updatedPost = state.posts.map((post) =>{
            if(post._id === action.payload.post._id) return action
            return post; 
        });
        state.posts = updatedPost;
    }
});


export const { setFriends,setLogin, setLogout,setMode, setPost,setPosts} = authSlice.actions;

export default authSlice.reducer;