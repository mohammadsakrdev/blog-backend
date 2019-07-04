import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';
import { POST_MODEL_PROVIDER } from '../constants';

@Injectable()
export class BlogService {
    constructor(@Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<Post>) { }

    async getPosts(): Promise<Post[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    async getPost(postID): Promise<Post> {
        const post = await this.postModel
            .findById(postID)
            .exec();
        return post;
    }

    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
        const newPost = await new this.postModel(createPostDTO);
        return newPost.save();
    }

    async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
        const editedPost = await this.postModel
            .findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }

    async deletePost(postID): Promise<any> {
        const deletedPost = await this.postModel
            .findByIdAndRemove(postID);
        return deletedPost;
    }
}
