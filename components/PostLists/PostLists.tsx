"use client"
import React, { FC, useState } from 'react';
import Link from "next/link";
import { PostData } from "@/api/types/posts";

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
                <Link href={`/posts/${post.id}`}>To Post</Link>
            </li>))}
        </ul>
    );
};

export default PostLists;