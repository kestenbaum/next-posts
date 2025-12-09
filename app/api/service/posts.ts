import { AxiosInstance, AxiosResponse } from "axios";
import { apiInstance } from "@/app/api";
import { PostData } from "@/app/api/types/posts";

export class PostService {
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