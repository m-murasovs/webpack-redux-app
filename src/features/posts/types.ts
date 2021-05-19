export interface Post {
    id: string,
    date: string,
    title: string,
    content: string,
    user: string,
    reactions: {
        [key: string]: number,
    },
}

export interface SinglePostProps extends Post {
    match: {
        params: {
            postId: string,
        }
    }
}
