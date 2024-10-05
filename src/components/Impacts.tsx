import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { Section } from './Section';
import { DisplayCard } from './Card';
import { ImpactsSection } from '../data/interface';
import { GlobalDecorationProp } from '../types';
import { decorateTextWithLink, mergeDecoration } from '../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export function Impacts({
  impacts,
  decoration,
}: {
  impacts: ImpactsSection;
} & Partial<GlobalDecorationProp>): React.ReactElement {
  return (
    <Container>
      <Section id="Impacts" title="Impacts">
        <DisplayCard>
          <List>
            {impacts.impacts.map((impact) => (
              <ListItem
                key={impact.text}
                disablePadding
                alignItems={'flex-start'}
              >
                <ListItemIcon sx={{ minWidth: '2em' }}>
                  <FontAwesomeIcon icon={fas['faHandPointRight']} />
                </ListItemIcon>
                <ListItemText
                  sx={{ textAlign: 'justify' }}
                  primary={decorateTextWithLink(
                    impact.text,
                    mergeDecoration(decoration, impact.decoration),
                  )}
                  secondary={
                    impact.secendaryText &&
                    decorateTextWithLink(
                      impact.secendaryText,
                      mergeDecoration(decoration, impact.decoration),
                    )
                  }
                  secondaryTypographyProps={{
                    style: { color: 'text.secondary' },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </DisplayCard>
      </Section>
    </Container>
  );
}
