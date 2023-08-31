import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MSG_LIMIT } from "./constant";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(LIVE_CHAT_MSG_LIMIT,1)
            state.messages.push(action.payload);
    }
}
});

export const { addMessage }  = chatSlice.actions;

export default chatSlice.reducer;