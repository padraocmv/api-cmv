import { defineConfig } from '@adonisjs/cors'

export default defineConfig({
  enabled: true,
  origin: true, // 🔥 aceita qualquer origem (produção simples)

  methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

  headers: true,

  exposeHeaders: [],

  credentials: true,

  maxAge: 90,
})
