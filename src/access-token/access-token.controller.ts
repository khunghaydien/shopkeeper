import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateAccessTokenDto } from './create-access-token.dto';
import { AccessTokenService } from './access-token.service';
import { Prisma } from '@prisma/client';

@Controller('access-token')
export class AccessTokenController {
  constructor(private readonly accessTokenService: AccessTokenService) { }
  @Post()
  async createAccessToken(@Body() data: CreateAccessTokenDto) {
    return this.accessTokenService.createAccessToken(data);
  }

  @Get()
  async getAllAccessTokens() {
    return this.accessTokenService.getAllAccessTokens();
  }

  @Get(':id')
  async getAccessTokenById(@Param('id') id: string) {
    return this.accessTokenService.getAccessTokenById(Number(id));
  }

  @Put(':id')
  async updateAccessToken(@Param('id') id: string, @Body() data: Prisma.AccessTokenUpdateInput) {
    return this.accessTokenService.updateAccessToken(Number(id), data);
  }

  @Delete(':id')
  async deleteAccessToken(@Param('id') id: string) {
    return this.accessTokenService.deleteAccessToken(Number(id));
  }
}
