import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  APP_KEY: Env.schema.string(),
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  HOST: Env.schema.string.optional(),
  PORT: Env.schema.number.optional(),
  LOG_LEVEL: Env.schema.string.optional(),
  TZ: Env.schema.string.optional(),

  // 🔥 ÚNICA variável de banco necessária
  DATABASE_URL: Env.schema.string(),
})
