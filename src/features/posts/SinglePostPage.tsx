import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Post, SinglePostProps } from './types';
import { PostAuthor } from './postAuthor';
import { TimeAgo } from './timeAgo';
import { ReactionButtons } from './ReactionButtons';

const StyledPostPage = styled.section`
    text-align: left;
    margin: 1rem;

    .SinglePostPage-button {
        margin-top: 0.5rem;
    }
`;

const SinglePostPage: React.FC<SinglePostProps> = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector((state: { posts: Post[] }) => state.posts.find((post) => post.id === postId));

    if (!post) {
        return (
            <StyledPostPage>
                <h2>Post not found :(</h2>
            </StyledPostPage>
        )
    }

    return (
        <StyledPostPage>
            <article className="SinglePostPage-post card">
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
                <p><strong>{post.title}</strong></p>
                <p className="SinglePostPage-content">{post.content}</p>
                <ReactionButtons post={post} />
                <div className="SinglePostPage-button">
                    <Link to={`/editPost/${post.id}`}>
                        Edit post
                    </Link>
                </div>
            </article>
        </StyledPostPage>
    )
}

export default SinglePostPage;
