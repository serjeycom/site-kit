# @serjeycom/site-kit

Версионированные общие части для независимых сайтов Сергея. Пакет не задаёт
цвета бренда или структуру страниц: каждый сайт определяет значения своих
CSS-переменных и собственные компоненты продукта.

## Состав

- `tokens.css` — семантические Tailwind 4 цвета и радиусы поверх локальных
  `--background`, `--foreground`, `--radius` и других HSL-переменных.
- `cn` — объединение классов с разрешением конфликтов Tailwind.
- `ExternalLink` — внешняя ссылка с безопасными атрибутами новой вкладки.
- `eslint-config` — единый базовый конфиг Next.js, React и TypeScript.

## Подключение

Для независимого деплоя сайтов используйте публичный HTTPS-архив тега:

```sh
npm install 'https://codeload.github.com/serjeycom/site-kit/tar.gz/refs/tags/v0.1.0'
```

```css
@import 'tailwindcss';
@import '@serjeycom/site-kit/tokens.css';
```

```ts
import { cn, ExternalLink } from '@serjeycom/site-kit';
```

```js
import config from '@serjeycom/site-kit/eslint-config';
export default config;
```

Повышайте версию тега в каждом сайте отдельно, затем запускайте его линтер и
production build. Lockfile фиксирует SHA-512 архива. Не используйте локальный
`file:` путь: он недоступен при независимом деплое сайтов.
