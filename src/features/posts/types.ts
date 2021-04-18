export interface Post {
    id: string,
    title: string,
    content: string,
}

export interface SinglePostProps extends Post {
    match: {
        params: {
            postId: string,
        }
    }
}
