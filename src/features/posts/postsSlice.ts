import { createSlice, nanoid } from '@reduxjs/toolkit';
import { Post } from './types';

interface prepareReturnType {
    payload: Post,
    meta: string,
    error: string,
}

const initialState: Post[] = [
    {
        id: '1',
        date: "2021-05-16T16:53:38.119Z",
        title: 'First Post',
        content: 'Hello',
        user: '1'
    },
    {
        id: '2',
        date: "2021-05-16T16:20:38.119Z",
        title: 'Second Post',
        content: 'Anyone here?',
        user: '2'
    },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title: string, content: string, userId: string): prepareReturnType => {
                const id = nanoid();
                return {
                    payload: {
                        id,
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId,
                    },
                    meta: '',
                    error: ''
                }
            },
        },
        postUpdated(state, action) {
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        }
    }
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
