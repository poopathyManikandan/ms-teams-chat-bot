export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  apiUrl:
    process.env.API_URL ||
    'https://baef-59-91-157-255.in.ngrok.io/api/messages',
  msteams: {
    clientId: process.env.MSTEAM_CLIENT_ID,
    clientSecret: process.env.MSTEAM_CLIENT_SECRET,
    appId: process.env.BOT_ID,
    appPassword: process.env.BOT_PASSWORD,
    appCatalogName: process.env.MICROSOFT_APP_CATALOG_NAME,
  },
});
