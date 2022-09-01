import { Injectable } from '@nestjs/common';
import { ActivityHandler, MessageFactory } from 'botbuilder';

@Injectable()
export class BotService extends ActivityHandler {
  constructor() {
    super();
    this.onConversationUpdate(async (context, next) => {
      const message = MessageFactory.text('Hi! How can I help you?');
      await context.sendActivity(message);
    });

    this.onMessage(async (context, next) => {
      const message = MessageFactory.text('Welcome to tetra tec');
      await context.sendActivity(message);
      await next();
    });
  }
}
