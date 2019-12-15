import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getMongoManager } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(id: string): Promise<User> {
        const user = new User();
        user.socketId = id;
        const manager = getMongoManager();
        await manager.save(user);
        return user;
    }
}
