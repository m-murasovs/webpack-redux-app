import React from 'react';
import { useSelector } from 'react-redux';

import { User } from '../users/usersSlice';

export const PostAuthor = ({ userId }: { userId: string }) => {
    const author = useSelector((state: { users: User[] }) => state.users.find(user => user.id === userId));

    return (
        <span>by { author ? author.name : 'Unknown soldier'} </span>
    )
};
