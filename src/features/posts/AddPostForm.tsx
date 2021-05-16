import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../../app/store';
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

const AddPostForm = (): React.ReactElement => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();

    const users = useSelector((state: RootState) => state.users);

    const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
    const onContentChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);
    const onAuthorChanged = (event: React.ChangeEvent<HTMLSelectElement>) => setUserId(event.target.value);

    const onSavePostClicked = (): void => {
        if (title && content) {
            dispatch(postAdded(title, content, userId))
        }
        setTitle('');
        setContent('');
    }

    const canSave = !!title && !!content && !!userId;

    const usersOptions = users.map((user: { id: string, name: string }) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

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
                    placeholder="What's on your mind?"
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Post content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                    Save post
                </button>
            </form>
        </StyledFormWrap>
    )
}

export default AddPostForm;
