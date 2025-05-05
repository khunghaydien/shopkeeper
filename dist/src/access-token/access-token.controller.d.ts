import { CreateAccessTokenDto } from './create-access-token.dto';
import { AccessTokenService } from './access-token.service';
import { Prisma } from '@prisma/client';
export declare class AccessTokenController {
    private readonly accessTokenService;
    constructor(accessTokenService: AccessTokenService);
    createAccessToken(data: CreateAccessTokenDto): Promise<{
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
    getAccessTokenById(id: string): Promise<({
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
    updateAccessToken(id: string, data: Prisma.AccessTokenUpdateInput): Promise<{
        accessToken: string;
        id: number;
        createdAt: Date;
        userId: number;
    }>;
    deleteAccessToken(id: string): Promise<{
        accessToken: string;
        id: number;
        createdAt: Date;
        userId: number;
    }>;
}
