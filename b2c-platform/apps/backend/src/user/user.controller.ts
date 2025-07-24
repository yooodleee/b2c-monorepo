import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post() 
    create(@Body() body: any) {
        console.log('POST /user 요청 받음:', body);
        return this.userService.create(body);
    }

    @Get()
    getAll() {
        return this.userService.findAll();
    }
}
