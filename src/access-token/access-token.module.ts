import { Module } from '@nestjs/common';
import { AccessTokenService } from './access-token.service';
import { AccessTokenController } from './access-token.controller';

@Module({
  providers: [AccessTokenService],
  controllers: [AccessTokenController]
})
export class AccessTokenModule {}
