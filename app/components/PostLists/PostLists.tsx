"use client"
import React, { FC, useState } from 'react';
import { PostData } from "@/app/api/types/posts";

interface PostListProps {
    posts: PostData[]
}

const PostLists: FC<PostListProps> = ({ posts: initialState }) => {
    const [posts, setPosts] = useState<PostData[]>(initialState);

    return (
        <ul>
            {posts && posts.map((post: PostData) => (<li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>))}
        </ul>
    );
};

export default PostLists;