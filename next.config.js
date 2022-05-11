const StrongConfig = require("@strong-config/node");

module.exports = {
    redirects() {
      const env = process.env.WHICH_ENV || "dev";
      process.env.STRONG_CONFIG_FILENAME = env;

      appConfig = new StrongConfig({
        configRoot: "config",
        runtimeEnvName: "STRONG_CONFIG_FILENAME",
      }).getConfig();

      const redirectTo = () => {
        switch (appConfig?.public?.env) {
          case 'prod':
            return 'production';
            break;
          case 'dev':
            return 'development';
            break;
          default:
            return 'no-env-variable'
            break;
      }}

      return [
        {
          source: "/",
          destination: redirectTo(),
          permanent: true,
        },
      ]
    },
    async rewrites() {
      return [
        {
          source: '/development',
          destination: '/',
        },
        {
          source: '/production',
          destination: '/',
        }
      ]
    }
};
