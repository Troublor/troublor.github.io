import { TextDecoration } from './data/interface';
import React from 'react';
import { Typography } from '@mui/material';
import { MyLink } from './components/Link';

export function uniqueKey(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function mergeDecoration(
  a?: TextDecoration,
  b?: TextDecoration,
): TextDecoration {
  if (!a) {
    a = {};
  }
  if (!b) {
    return a;
  }
  return {
    links: { ...a.links, ...b.links },
    highlights: [...(a.highlights ?? []), ...(b.highlights ?? [])],
    emphasis: [...(a.emphasis ?? []), ...(b.emphasis ?? [])],
  };
}

export function decorateTextWithLink(
  text: string,
  decoration?: TextDecoration,
): React.ReactElement {
  if (!decoration) {
    return <>{text}</>;
  }

  // find one replaceable text
  const links = decoration.links ?? {};
  for (const key in links) {
    const idx = text.indexOf(key);
    if (idx >= 0) {
      const link = links[key];
      const left = text.slice(0, idx);
      const right = text.slice(idx + key.length);
      return (
        <>
          {decorateTextWithLink(left, decoration)}
          <MyLink text={key} href={link} />
          {decorateTextWithLink(right, decoration)}
        </>
      );
    }
  }

  const hightlights = decoration.highlights ?? [];
  for (const highlight of hightlights) {
    const idx = text.indexOf(highlight);
    if (idx >= 0) {
      const left = text.slice(0, idx);
      const right = text.slice(idx + highlight.length);
      return (
        <>
          {decorateTextWithLink(left, decoration)}
          <Typography component="span" color={'primary.main'}>
            {highlight}
          </Typography>
          {decorateTextWithLink(right, decoration)}
        </>
      );
    }
  }

  const emphasis = decoration.emphasis ?? [];
  for (const emp of emphasis) {
    const idx = text.indexOf(emp);
    if (idx >= 0) {
      const left = text.slice(0, idx);
      const right = text.slice(idx + emp.length);
      return (
        <>
          {decorateTextWithLink(left, decoration)}
          <Typography component="span" color={'inherit'} fontStyle={'italic'}>
            {emp}
          </Typography>
          {decorateTextWithLink(right, decoration)}
        </>
      );
    }
  }

  return <>{text}</>;
}
