import { run as initializeReactRoot } from './config/initializers/reactRoot'
import { run as initializeUI } from './config/initializers/ui'
import { run as initializeFirebase } from './config/initializers/firebase'

import './application/stylesheets/index.css'
import './application/stylesheets/videojs.css'
import './application/stylesheets/slick.css'

const main = async () => {
  await initializeReactRoot();
  await initializeFirebase();
  await initializeUI();
}

main()
