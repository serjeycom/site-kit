import assert from 'node:assert/strict';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { cn, ExternalLink } from '../src/index.js';

test('cn resolves conflicting Tailwind utilities', () => {
  assert.equal(cn('px-2', false && 'hidden', ['px-4', 'text-sm']), 'px-4 text-sm');
});

test('ExternalLink opens safely without changing site-specific styling', () => {
  const markup = renderToStaticMarkup(createElement(ExternalLink, {
    href: 'https://example.com',
    className: 'btn-primary',
    children: 'Открыть',
  }));
  assert.match(markup, /class="btn-primary"/);
  assert.match(markup, /target="_blank"/);
  assert.match(markup, /rel="noopener noreferrer"/);
});
