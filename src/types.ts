import { Theme } from '@mui/material/styles';
import {
  ExperienceList,
  MiscData,
  Profile,
  PublicationList,
  TextDecoration,
} from './data/interface';

export type ThemeProp = {
  theme: Theme;
};

export type ProfileProp = {
  profile: Profile;
};

export type PublicationsProp = {
  publications: PublicationList;
};

export type MiscDataProp = {
  miscData: MiscData;
};

export type ExperienceProp = {
  experience: ExperienceList;
};

export type GlobalDecorationProp = {
  decoration: TextDecoration;
};
