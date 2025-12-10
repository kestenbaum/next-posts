import React from 'react';
import Link from "next/link";
import { postsService } from "@/api/service/posts";
import { PostData } from "@/api/types/posts";
import PostLists from "@/components/PostLists/PostLists";


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