import { Controller, Logger, Post, Req, Res } from '@nestjs/common';
import { BotFrameworkAdapter, Request } from 'botbuilder';
import { BotAdapter } from './bot.adapter';
import { BotService } from './bot.service';
import { bot } from './initialize';
import { inspect } from 'util';

@Controller('api')
export class BotController {
  botAdapter: BotFrameworkAdapter;
  private readonly logger = new Logger(BotController.name);
  constructor(private botService: BotService, private botAdaptor: BotAdapter) {
    this.botAdapter = this.botAdaptor.getAdaptor();
  }

  @Post('/messages')
  async messages(@Req() req: Request, @Res() res) {
    try {
      await this.botAdapter.processActivity(req, res, (context) => {
        return this.botService.run(context);
      });
    } catch (err) {
      this.logger.error('Error handling messages ' + inspect(err));
    }
  }
}
