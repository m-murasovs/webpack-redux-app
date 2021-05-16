import { createSlice, nanoid } from '@reduxjs/toolkit';

interface initialStateType {
    id: string,
    title: string,
    content: string,
    user: string,
}

interface prepareReturnType {
    payload: initialStateType,
    meta: string,
    error: string,
}

const initialState: initialStateType[] = [
    {
        id: '1',
        title: 'First Post',
        content: 'Hello',
        user: '1'
    },
    {
        id: '2',
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
