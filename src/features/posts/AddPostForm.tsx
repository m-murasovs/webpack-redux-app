import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFormWrap = styled.section`

`;

export const AddPostForm = (): React.ReactElement => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
    const onContentChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);

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
            </form>
        </StyledFormWrap>
    )
}