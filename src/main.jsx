import { run as initializeReactRoot } from './config/initializers/reactRoot'
import { run as initializeUI } from './config/initializers/ui'

import './application/stylesheets/index.css'
import './application/stylesheets/videojs.css'

const main = async () => {
  await initializeReactRoot();
  await initializeUI();
}

main()
