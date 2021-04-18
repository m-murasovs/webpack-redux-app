import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { postUpdated } from './postsSlice';
import { Post, SinglePostProps } from './types';

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

const EditPostForm: React.FC<SinglePostProps> = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector((state: { posts: Post[] }) => state.posts.find(post => post.id === postId));

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch();
    const history = useHistory()

    const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
    const onContentChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);

    const onSavePostClicked = (): void => {
        if (title && content) {
            dispatch(
                postUpdated({
                    id: postId,
                    title,
                    content,
                })
            );
            history.push(`/posts/${postId}`);
        }
    }

    return (
        <StyledFormWrap>
            <h2>Edit post</h2>
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




export default EditPostForm;
