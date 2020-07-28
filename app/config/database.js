module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        // host: "${process.env.DATABASE_HOST || '127.0.0.1'}",
        // srv:  "${process.env.DATABASE_SRV || true}",
        // port: "${process.env.DATABASE_PORT || 27017}",
        // database: "${process.env.DATABASE_NAME || 'strapi'}",
        // username: "${process.env.DATABASE_USERNAME || ''}",
        // password: "${process.env.DATABASE_PASSWORD || ''}"
        host: env('DATABASE_HOST', ''),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', ''),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
