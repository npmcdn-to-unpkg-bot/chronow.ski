import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router'

import {AppComponent} from './controllers/app'

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
]);