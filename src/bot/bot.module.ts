import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BotAdapter } from './bot.adapter';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';

@Module({
  imports: [],
  controllers: [BotController],
  providers: [ConfigService, BotService, BotAdapter],
  exports: [BotService, BotAdapter],
})
export class BotModule {}
