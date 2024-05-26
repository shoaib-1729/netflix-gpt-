import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
        name: "user",
        // initial state of the user (set null)
        initialState: null,
        reducers: {
            // actions (add the user, remove the user)
            // when the user signs-in, add the user to the redux store
            addUser: (state, action) => {
                return action.payload
            },
            // when the user signs-out, remove the user from the redux store
            removeUser: () => {
                return null
            }
        }
    })
    // export actions
export const { addUser, removeUser } = userSlice.actions
    // export reducer
export default userSlice.reducer;

/*

userSlice{
    actions: {
        addUser, removeUser
    }

    reducer:{
        (state, action) => {
            return action.payload
        },
        () => {
            return null
        }
    }

}


*/