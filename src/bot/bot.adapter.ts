import { Controller, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { inspect } from 'util';
import {
  BotFrameworkAdapter,
  ConfigurationServiceClientCredentialFactory,
  createBotFrameworkAuthenticationFromConfiguration,
} from 'botbuilder';

@Controller()
export class BotAdapter {
  private readonly logger = new Logger(BotAdapter.name);
  private botAdapter: BotFrameworkAdapter;
  constructor(private configService: ConfigService) {
    // const credentialsFactory = new ConfigurationServiceClientCredentialFactory({
    //   MicrosoftAppId: this.configService.get('msteams.appId'),
    //   MicrosoftAppPassword: this.configService.get('msteams.appPassword'),
    // });
    try {
      // const botFrameworkAuthentication =
      //   createBotFrameworkAuthenticationFromConfiguration(
      //     null,
      //     credentialsFactory,
      //   );
      this.botAdapter = new BotFrameworkAdapter({
        appId: this.configService.get('msteams.appId'),
        appPassword: this.configService.get('msteams.appPassword'),
      });
      this.botAdapter.onTurnError = async (context, error) => {
        this.logger.error(`\n [onTurnError] unhandled error` + inspect(error));
      };
    } catch (err) {
      this.logger.error('error creating bot adapter ' + inspect(err));
    }
  }

  getAdaptor() {
    return this.botAdapter;
  }
}
