import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Post } from './types';
import { PostAuthor } from './postAuthor';
import { TimeAgo } from './timeAgo';

interface State {
    posts: Post[],
}

const StyledPostsList = styled.section`
    h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }

    .post {
        display: block;
        align-items: center;
        padding: 0 1rem;
        border: 1px solid rgb(177, 174, 174);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        max-width: 50rem;
    }

    .post-excerpt h3 {
        margin: 0;
        font-size: 1.5rem;
    }

    p.post-content {
        margin-top: 1rem;
    }
`;

const PostsList: React.FC = () => {
    const posts = useSelector((state: State) => state.posts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map((post) => (
        <article className="PostsList=post" key={post.id}>
            <h3>{post.title}</h3>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
            <p className="PostsList-postContent">{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className="PostsList-button">
                View Post
            </Link>
        </article>
    ));

    return (
        <StyledPostsList>
            <h2>Posts</h2>
            {renderedPosts}
        </StyledPostsList>
    );
}

export default PostsList;
