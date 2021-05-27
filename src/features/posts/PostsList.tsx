import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Post } from './types';
import { PostAuthor } from './postAuthor';
import { TimeAgo } from './timeAgo';
import { ReactionButtons } from './ReactionButtons';

interface State {
    posts: Post[],
}

const StyledPostsList = styled.section`
    p.PostsList-content {
        margin-top: 1rem;
    }

    .PostsList-reactions {
        margin-top: 0.5rem;
    }
`;

const PostsList: React.FC = () => {
    const posts = useSelector((state: State) => state.posts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map((post) => (
        <article className="PostsList-post card" key={post.id}>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
            <p><strong>{post.title}</strong></p>
            <p className="PostsList-content">{post.content.substring(0, 100)}</p>
            <Link
                to={`/posts/${post.id}`}
                className="PostsList-button"
            >
                View Post
            </Link>
            <ReactionButtons post={post} className="PostsList-reactions" />
        </article>
    ));

    return (
        <StyledPostsList>
            {renderedPosts}
        </StyledPostsList>
    );
}

export default PostsList;
