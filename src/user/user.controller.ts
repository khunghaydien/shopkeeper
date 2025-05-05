import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() data: Prisma.UserCreateInput) {
        return this.userService.createUser(data);
    }

    @Get()
    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.userService.getUserById(Number(id));
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
        return this.userService.updateUser(Number(id), data);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(Number(id));
    }
}
