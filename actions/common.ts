import { createAction, nanoid } from '@reduxjs/toolkit';

const addMessage = createAction('common/addMessage', (detail: MessageDetail) => ({
  payload: {
    id: nanoid(),
    type: detail.type,
    content: detail.content,
  },
}));

const removeMessage = createAction('common/removeMessage', (id: string) => ({
  payload: id,
}));

export { addMessage, removeMessage };
