import React from 'react';
import Link from "next/link";
import PostLists from "@/components/PostLists/PostLists";
import { postsService } from "@/api/service/posts";


const Page = async () => {
    const posts = await postsService.getAllPosts();
    return (
        <section>
            <Link href={"/"}>To main page</Link>
            <PostLists data={posts}/>
        </section>
    );
};

export default Page;