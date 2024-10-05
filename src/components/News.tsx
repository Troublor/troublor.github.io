import React from 'react';
import { News as NewsType, NewsSection } from '../data/interface';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Section } from './Section';
import { GlobalDecorationProp } from '../types';
import { decorateTextWithLink, mergeDecoration } from '../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { DisplayCard } from './Card';

export function NewsItem({
  news,
  decoration,
}: GlobalDecorationProp & {
  news: NewsType;
}): React.ReactElement {
  return (
    <Box>
      <FontAwesomeIcon icon={fas['faRss']} /> &nbsp;
      <Typography variant="body1" component="span">
        {`${news.date[0]}-${news.date[1]}-${news.date[2]}:`}
      </Typography>
      &nbsp;
      <Typography variant="body1" component="span">
        {decorateTextWithLink(
          news.content,
          mergeDecoration(decoration, news.decoration),
        )}
      </Typography>
    </Box>
  );
}

export function News({
  news,
  decoration,
}: GlobalDecorationProp & { news: NewsSection }): React.ReactElement {
  return (
    <Container>
      <Section id="News" title="News">
        <DisplayCard>
          <Stack direction={'column'} spacing={2}>
            {news.news.map((c) => (
              <NewsItem key={c.content} news={c} decoration={decoration} />
            ))}
          </Stack>
        </DisplayCard>
      </Section>
    </Container>
  );
}
