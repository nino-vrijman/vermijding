import { Context } from 'elysia';

const emojiMap = {
  empty: '',
  hearts: '💖',
  question: '❓',
  sparkles: '✨'
};

export function Index(ctx: Context) {
  const [rawText, emojiOpt] = ctx.path.split('/').reverse();

  const emoji =
    emojiMap[emojiOpt as keyof typeof emojiMap] ?? emojiMap.question;

  const textToTransform = decodeURIComponent(rawText).trim().toUpperCase();

  const text = [
    emoji,
    ...(textToTransform ? textToTransform : 'SPARKLES'),
    emoji
  ].join(' ');

  const style = {
    backgroundColor: '#003049'
  };

  return (
    <>
      <html lang="en">
        <head>
          <title>{text}</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          <div
            class="flex items-center justify-center h-screen bg-bluse-900"
            style={style}
          >
            <h1 class="text-white text-3xl font-semibold">{text}</h1>
          </div>
        </body>
        <script>navigator.clipboard.writeText("{text}");</script>
      </html>
    </>
  );
}
