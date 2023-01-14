import React from 'react';
import * as smoothScroll from 'smoothscroll-polyfill';

interface Props {
  offset?: number;
}

export class Scroller extends React.Component<
  Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
> {
  componentDidMount(): void {
    smoothScroll.polyfill();
  }

  smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    let offset = 0;
    if (this.props.offset) {
      offset = this.props.offset;
    }

    const id = e.currentTarget.getAttribute('href')?.slice(1);
    if (id) {
      const $anchor = document.getElementById(id);
      if ($anchor) {
        const offsetTop =
          $anchor.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({
          top: offsetTop - offset,
          behavior: 'smooth',
        });
      }
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render(): React.ReactElement {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line unused-imports/no-unused-vars
    const { offset, ...rest } = this.props;
    return (
      <a
        {...rest}
        style={{ color: '#FFFFFF', textDecoration: 'none' }}
        onClick={this.smoothScroll}
      >
        {this.props.children}
      </a>
    );
  }
}
