import { App } from 'vue'

import registerElement from './register-element'
import registerIcon from './register-icon'

export default function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerIcon)
}
