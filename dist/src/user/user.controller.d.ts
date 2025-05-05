import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(data: Prisma.UserCreateInput): Promise<{
        id: number;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllUsers(): Promise<{
        id: number;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getUserById(id: string): Promise<{
        id: number;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updateUser(id: string, data: Prisma.UserUpdateInput): Promise<{
        id: number;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        id: number;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
