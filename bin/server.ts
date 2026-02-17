/**
 * HTTP server entrypoint
 */

import { Ignitor } from '@adonisjs/core'

new Ignitor(new URL('../', import.meta.url))
  .tap((app) => {
    app.booting(async () => {
      await import('#start/env')
    })
  })
  .httpServer()
  .start()
