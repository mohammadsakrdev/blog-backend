import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { BlogRepository } from './blog.repository';

@Injectable()
export class BlogService {
    constructor(private blogRepository: BlogRepository) { }

    async getPosts(): Promise<CreatePostDTO[]> {
        return this.blogRepository.getAll();
    }

    async getPost(postID): Promise<CreatePostDTO> {
        return this.blogRepository.findById(postID);
    }

    async addPost(createPostDTO: CreatePostDTO): Promise<CreatePostDTO> {
        return this.blogRepository.create(createPostDTO);
    }

    // async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    //     const editedPost = await this.postModel
    //         .findByIdAndUpdate(postID, createPostDTO, { new: true });
    //     return editedPost;
    // }

    async deletePost(postID): Promise<any> {
        return this.blogRepository.deleteById(postID);
    }
}
