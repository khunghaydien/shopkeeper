import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateAccessTokenDto } from './create-access-token.dto';

@Injectable()
export class AccessTokenService {
  constructor(private readonly prisma: PrismaService) { }
  async createAccessToken({ userId, accessToken }: CreateAccessTokenDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error(`User with ID ${userId} does not exist`);
    }

    return this.prisma.accessToken.create({
      data: {
        accessToken,
        userId,
      },
    });
  }

  async getAllAccessTokens() {
    return this.prisma.accessToken.findMany({
      include: { user: true }, 
    });
  }

  async getAccessTokenById(id: number) {
    return this.prisma.accessToken.findUnique({
      where: { id },
      include: { user: true }, 
    });
  }

  async updateAccessToken(id: number, data: Prisma.AccessTokenUpdateInput) {
    return this.prisma.accessToken.update({
      where: { id },
      data,
    });
  }

  async deleteAccessToken(id: number) {
    return this.prisma.accessToken.delete({
      where: { id },
    });
  }
}
