import { PostData } from "@/api/types/posts";
import { create } from "zustand";
import { postsService } from "@/api/service/posts";

interface IPost {
    posts: PostData[];
    postsLoading: boolean;
    postsError: string | null;

    currentPost: PostData | null;
    postLoading: boolean;
    postError: string | null;

    fetchPosts: () => Promise<void>;
    fetchPostById: (id: string) => Promise<void>;
    setPosts: (posts: PostData[]) => void;
}

const State: Omit<IPost, "fetchPosts" | "fetchPostById" | "setPosts"> = {
    posts: [],
    postsLoading: false,
    postsError: null,

    currentPost: null,
    postLoading: false,
    postError: null,
};

export const usePostsStore = create<IPost>((set) => ({
    ...State,
    fetchPosts: async () => {
        try {
            const posts = await postsService.getAllPosts();
            set({
                posts: posts,
                postsLoading: false,
                postsError: null,
            })
        } catch (error) {
            console.error(error);
            set({
                postsLoading: false,
                postsError: String(error),
            })
        }
    },
    fetchPostById: async (id: string) => {
        try {
            const post = await postsService.getPostById(Number(id));
            set({
                postLoading: false,
                postError: null,
            })
        } catch (error) {
            console.error(error);
            set({
                postLoading: false,
                postError: String(error),
            })
        }
    },
    setPosts: (posts) => set({ posts }),
}))