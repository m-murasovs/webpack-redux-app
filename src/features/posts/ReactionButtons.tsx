import React from 'react';
import { useDispatch } from 'react-redux';

import { reactionAdded } from './postsSlice';
import { Post } from './types';

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
};

export const ReactionButtons = ({ post, className }: { post: Post, className?: string }) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                onClick={() => dispatch(reactionAdded({
                    postId: post.id,
                    reaction: name,
                }))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    });

    return <div className={className}>{reactionButtons}</div>
}
