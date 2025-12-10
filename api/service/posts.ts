import { AxiosInstance, AxiosResponse } from "axios";
import { PostData } from "@/api/types/posts";
import { apiInstance } from "@/api";


class PostService {
    private axios: AxiosInstance = apiInstance;

    public async getAllPosts (): Promise<PostData[]> {
        const response: AxiosResponse = await this.axios.get("/posts");
        return response.data;
    }

    public async getPostById (id :number): Promise<PostData> {
        const response = await this.axios.get(`/posts/${id}`)
        return response.data;
    }
}

export const postsService = new PostService();