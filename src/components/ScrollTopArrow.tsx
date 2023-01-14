import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemedProps } from '../theme';
import { Box } from '@mui/material';
import { fas } from '@fortawesome/free-solid-svg-icons';

export interface ScrollTopArrowState {
  showScroll: boolean;
}

export class ScrollTopArrow extends React.Component<
  ThemedProps,
  ScrollTopArrowState
> {
  constructor(props: ThemedProps) {
    super(props);
    this.checkScrollTop = this.checkScrollTop.bind(this);
    window.addEventListener('scroll', this.checkScrollTop);
    this.state = {
      showScroll: false,
    };
  }

  private checkScrollTop() {
    if (!this.state.showScroll && window.scrollY > 400) {
      this.setState({ showScroll: true });
    } else if (this.state.showScroll && window.scrollY <= 400) {
      this.setState({ showScroll: false });
    }
  }

  scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    return (
      <Box
        id={'return-to-top'}
        display={this.state.showScroll ? 'flex' : 'none'}
        position={'fixed'}
        bottom={'1em'}
        right={'1em'}
        bgcolor={this.props.theme.palette.secondary.main}
        width={'2em'}
        height={'2em'}
        borderRadius={'50%'}
        justifyContent={'center'}
        alignItems={'center'}
        style={{ cursor: 'pointer' }}
        onClick={this.scrollTop}
      >
        <FontAwesomeIcon
          color={this.props.theme.palette.secondary.contrastText}
          size={'1x'}
          icon={fas['faArrowUp']}
        />
      </Box>
    );
  }
}
