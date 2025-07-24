import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.user.findMany();
    }

    async create(data: any) {
        console.log('UserService.create() 호출됨:', data);
        return { message: 'User created', user: data };
    }
}
