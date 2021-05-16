export interface Post {
    id: string,
    date: string,
    title: string,
    content: string,
    user: string,
}

export interface SinglePostProps extends Post {
    match: {
        params: {
            postId: string,
        }
    }
}
