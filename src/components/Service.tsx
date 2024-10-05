import React from 'react';
import { ServiceSection, Service as ServiceType } from '../data/interface';
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Section } from './Section';
import { DisplayCard } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';

function ServiceList({
  role,
  services,
}: {
  role: string;
  services: ServiceType[];
}): React.ReactElement {
  return (
    <>
      <Typography variant="h4" component="h4">
        {role}
      </Typography>
      <List>
        {services.map((s) => (
          <ListItem
            key={s.organization}
            disablePadding
            alignItems={'flex-start'}
          >
            <ListItemIcon sx={{ minWidth: '2em' }}>
              <FontAwesomeIcon icon={far['faCircleDot']} />
            </ListItemIcon>
            <ListItemText
              primary={s.organization}
              secondary={s.years && `> ${s.years.sort().join(', ')}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export function Service({
  service,
}: {
  service: ServiceSection;
}): React.ReactElement {
  return (
    <Container>
      <Section id="Service" title="Service">
        <DisplayCard>
          <Stack direction={'column'}>
            <ServiceList
              role="Program Committee Member"
              services={service.pcMember}
            />
            <ServiceList role="Reviewer" services={service.reviewer} />
          </Stack>
        </DisplayCard>
      </Section>
    </Container>
  );
}
