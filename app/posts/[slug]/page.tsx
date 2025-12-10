import React, { FC } from 'react';
import { notFound } from "next/navigation";
import { PostData } from "@/api/types/posts";
import { PostService } from "@/api/service/posts";

interface Props {
    params: {
        slug: string;
    }
}

const postsService = new PostService();
const Page:FC<Props> = async ({ params }) => {

    const { slug } = await params;

    let currentPost: PostData;
    try {
        currentPost = await postsService.getPostById(Number(slug))
    } catch (error) {
        notFound();
    }

    return (
        <section>
            <h2>{currentPost.title}</h2>
            <p>{currentPost.body}</p>
        </section>
    );
};

export default Page;