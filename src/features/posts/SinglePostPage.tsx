import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Post, SinglePostProps } from './types';
import { PostAuthor } from './postAuthor';
import { TimeAgo } from './timeAgo';
import { ReactionButtons } from './ReactionButtons';

const SinglePostPage: React.FC<SinglePostProps> = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector((state: { posts: Post[] }) => state.posts.find((post) => post.id === postId));

    if (!post) {
        return (
            <section>
                <h2>Post not found :(</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="SinglePostPage-post">
                <h2>{post.title}</h2>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
                <p className="SinglePostPage-content">{post.content}</p>
                <ReactionButtons post={post} />
                <Link
                    to={`/editPost/${post.id}`}
                    className="button"
                >
                    Edit post
                </Link>
            </article>
        </section>
    )
}

export default SinglePostPage;
