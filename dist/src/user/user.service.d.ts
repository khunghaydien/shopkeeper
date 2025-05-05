import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    getUserById(id: number): Promise<{
        id: number;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updateUser(id: number, data: Prisma.UserUpdateInput): Promise<{
        id: number;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: number): Promise<{
        id: number;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
