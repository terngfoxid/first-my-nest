import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../models/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService) {}

    @Get()
    async getAll(): Promise<User[]> {
        return await this.UserService.getAll();
    }

    @Get('getOneUser')
    async getOneUser(): Promise<User[]> {
        return await this.UserService.getOneUser();
    }

    @Post()
    async create(@Body() data:User):Promise<User[]>{
        return await this.UserService.create(data);
    }

    @Put()
    async update(@Body() data:User):Promise<User[]>{
        return await this.UserService.update(data);
    }

}
