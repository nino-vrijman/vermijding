import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { Index } from './pages';

const app = new Elysia()
  .use(html())
  .get('favicon.ico', (ctx) => {
    ctx.set.status = 404;
    return;
  }, )
  .get('/*', Index)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
