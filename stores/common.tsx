import { createSlice } from '@reduxjs/toolkit';
import actions from 'actions';

import type { PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: string;
  type: MessageType;
  content: string;
}

export interface CommonState {
  messages: Message[];
  showSideBar: boolean;
}

const initialState: CommonState = {
  messages: [],
  showSideBar: false,
};

const addMessage = (state: CommonState, action: PayloadAction<Message>) => {
  state.messages = [...state.messages, action.payload];
};

const removeMessage = (state: CommonState, action: PayloadAction<string>) => {
  state.messages = state.messages.filter((message) => message.id !== action.payload);
};

export const commonSlice = createSlice({
  name: 'commonStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.addMessage, addMessage).addCase(actions.removeMessage, removeMessage);
  },
});

export default commonSlice.reducer;
