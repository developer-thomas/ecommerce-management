import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideEnvironmentNgxMask  } from 'ngx-mask';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';

interface MaskConfig {
  thousandSeparator?: string;
  decimalMarker?: '.' | ',' | ['.', ','];
}

const maskConfig: Partial<MaskConfig> = {
  thousandSeparator: '.',
  decimalMarker: ','
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding(), withHashLocation()),
    provideAnimations(),
    provideEnvironmentNgxMask(maskConfig),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideToastr({
			preventDuplicates: true,
			closeButton: true,
			timeOut: 2000,
			progressBar: true,
		}),
  ]
};
