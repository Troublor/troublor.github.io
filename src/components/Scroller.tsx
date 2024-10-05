import React from 'react';
import * as smoothScroll from 'smoothscroll-polyfill';

export function Scroller({
  offset,
  ...rest
}: { offset?: number } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { children, onClick } = rest;

  React.useEffect(() => {
    smoothScroll.polyfill();
  }, []);

  const scroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href')?.slice(1);
    if (id) {
      const $anchor = document.getElementById(id);
      if ($anchor) {
        const offsetTop =
          $anchor.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({
          top: offsetTop - (offset || 0),
          behavior: 'smooth',
        });
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      {...rest}
      style={{ color: '#FFFFFF', textDecoration: 'none' }}
      onClick={scroll}
    >
      {children}
    </a>
  );
}
