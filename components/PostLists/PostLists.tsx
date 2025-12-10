"use client"
import Link from "next/link";
import { PostData } from "@/api/types/posts";
import { usePostsStore } from "@/store/use-posts-store";
import { FC, useEffect } from "react";

interface Props {
    data: PostData[];
}

const PostLists: FC<Props>= ({ data }) => {
    const setPosts  = usePostsStore((state) => state.setPosts);

    useEffect(() => {
        setPosts(data);
    }, [data, setPosts])
    const posts = usePostsStore((state) => state.posts);

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