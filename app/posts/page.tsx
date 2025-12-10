import React from 'react';
import Link from "next/link";
import { PostService } from "@/api/service/posts";
import { PostData } from "@/api/types/posts";
import PostLists from "@/components/PostLists/PostLists";


const postsService = new PostService();
const Page = async () => {
    const posts: PostData[] = await postsService.getAllPosts();

    return (
        <section>
            <Link href={"/"}>To main page</Link>
            <PostLists posts={posts} />
        </section>
    );
};

export default Page;