import { Link } from 'react-router-dom';
import { uniqueKey } from '../helpers';
import React from 'react';
import styled from '@emotion/styled';

export function MyLink(props: {
  text: string;
  href: string;
  currentTab?: boolean; // open in current tab
  color?: string; // color of the text
  noDecoration?: boolean; // no underline
}): React.ReactElement {
  const ThisLink = styled(Link)(() => ({
    textDecoration: props.noDecoration ? 'none' : 'underline',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    textDecorationColor: 'inherit',
    color: 'inherit',
  }));
  return (
    <ThisLink
      key={uniqueKey()}
      to={props.href}
      target={props?.currentTab ? '_self' : '_blank'}
    >
      {props.text}
    </ThisLink>
  );
}
