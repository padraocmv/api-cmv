import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: {
      client: 'pg',
      connection: {
        host: env.get('DB_HOST'),
        port: Number(env.get('DB_PORT')),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
        ssl: {
          rejectUnauthorized: false,
          require: true, // FORÇA SSL
        },
        connectionTimeoutMillis: 30000, // 30 segundos
        idleTimeoutMillis: 30000,
        max: 20,
        keepAlive: true,
        keepAliveInitialDelayMillis: 10000,
      },
      pool: {
        min: 1, // Mínimo 1 conexão sempre ativa
        max: 5, // Máximo 5 para evitar sobrecarga
        acquireTimeoutMillis: 60000,
        createTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
      healthCheck: true,
    },
  },
})

export default dbConfig
