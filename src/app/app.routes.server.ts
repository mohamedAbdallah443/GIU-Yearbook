
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Dynamic student story pages are rendered in the browser.
  {
    path: 'students/:id',
    renderMode: RenderMode.Client,
  },

  // Prerender all remaining routes.
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
