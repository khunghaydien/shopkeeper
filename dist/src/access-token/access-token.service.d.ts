import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateAccessTokenDto } from './create-access-token.dto';
export declare class AccessTokenService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createAccessToken({ userId, accessToken }: CreateAccessTokenDto): Promise<{
        accessToken: string;
        id: number;
        createdAt: Date;
        userId: number;
    }>;
    getAllAccessTokens(): Promise<({
        user: {
            id: number;
            createdAt: Date;
            email: string;
            updatedAt: Date;
        };
    } & {
        accessToken: string;
        id: number;
        createdAt: Date;
        userId: number;
    })[]>;
    getAccessTokenById(id: number): Promise<({
        user: {
            id: number;
            createdAt: Date;
            email: string;
            updatedAt: Date;
        };
    } & {
        accessToken: string;
        id: number;
        createdAt: Date;
        userId: number;
    }) | null>;
    updateAccessToken(id: number, data: Prisma.AccessTokenUpdateInput): Promise<{
        accessToken: string;
        id: number;
        createdAt: Date;
        userId: number;
    }>;
    deleteAccessToken(id: number): Promise<{
        accessToken: string;
        id: number;
        createdAt: Date;
        userId: number;
    }>;
}
