import { ConversationBot } from '@microsoft/teamsfx';
export const bot = new ConversationBot({
  adapterConfig: {
    appId: process.env.BOT_ID,
    appPassword: process.env.BOT_PASSWORD,
  },
  notification: {
    enabled: true,
  },
});
