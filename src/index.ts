import { App } from 'vue'
import * as components from './components'

function install (app: App) {
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key])
  }
}

import './assets/application.scss'

export default { install }

export * from './components'
export * from './constants'
export * from './utils'
