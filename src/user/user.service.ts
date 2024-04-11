import { Injectable } from '@nestjs/common';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getOneUser(): Promise<User[]> {
        return await this.userRepository.find({skip:0,take:1});
    }

    async create(data:User): Promise<User[]>{
        const newUser = new User();
        newUser.firstName = data.firstName;
        newUser.lastName = data.lastName
        return [await this.userRepository.save(newUser)];
    }

    async update(data:User): Promise<User[]>{
        const updateUser = await this.userRepository.findOneBy({id:data.id});
        updateUser.firstName = data.firstName
        updateUser.lastName = data.lastName
        return [await this.userRepository.save(updateUser)];
    }
}
