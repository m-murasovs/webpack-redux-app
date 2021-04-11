import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

interface Post {
    id: string,
    title: string,
    content: string
}

interface State {
    posts: [Post],
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

export const PostsList = (): React.ReactElement => {
    const posts = useSelector((state: State) => state.posts);

    const renderedPosts = posts.map((post) => (
        <article className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ));

    return (
        <StyledPostsList>
            <h2>Posts</h2>
            {renderedPosts}
        </StyledPostsList>
    );
}