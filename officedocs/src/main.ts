import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCeUx0TXxbf1xzZFRHal9QTnNYUiweQnxTdEZjX31WcXVWR2VUVkByVw==');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
