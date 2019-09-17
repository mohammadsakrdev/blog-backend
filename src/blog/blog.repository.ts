import { BaseRepository } from '../infrastructure/BaseRepository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { POST_MODEL_PROVIDER } from '../constants';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogRepository implements BaseRepository<CreatePostDTO> {
    constructor(@Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<Post>) { }

    async create(t: CreatePostDTO): Promise<CreatePostDTO> {
        const newPost = await new this.postModel(t);
        return newPost.save();
    }
    async deleteById(id: string): Promise<boolean> {
        const deletedPost = await this.postModel
            .findByIdAndRemove(id);
        return true;
    }
    async findById(id: string): Promise<CreatePostDTO> {
        const post = await this.postModel
            .findById(id)
            .exec();
        return post;
    }
    async update(id: string, t: CreatePostDTO): Promise<CreatePostDTO> {
        const editedPost = await this.postModel
            .findByIdAndUpdate(id, t, { new: true });
        return editedPost;
    }

    async getAll(): Promise<CreatePostDTO[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

}
