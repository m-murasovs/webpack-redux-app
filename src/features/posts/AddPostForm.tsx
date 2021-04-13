import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded } from './postsSlice';

const StyledFormWrap = styled.section`
    margin: 2rem;

    form {
        display: inline-grid;
        
        label, button {
            margin: 1rem 0;
        }

        button {
            background: #bffcc6;
        }
    }
`;

export const AddPostForm = (): React.ReactElement => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
    const onContentChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);

    const onSavePostClicked = (): void => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            )
        }

        setTitle('');
        setContent('');
    }

    return (
        <StyledFormWrap>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input
                    type="text"
                    name="postTitle"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Post content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked}>
                    Save post
                </button>
            </form>
        </StyledFormWrap>
    )
}