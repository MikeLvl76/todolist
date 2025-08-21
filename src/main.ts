import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './components/app.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
