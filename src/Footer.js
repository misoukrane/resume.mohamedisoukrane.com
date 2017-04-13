import React, { Component } from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import GFooter from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';

import grommetLogo from './grommet.svg';
import reactLogo from './logo.svg'

class Footer extends Component {
  render() {
    const reactLink = <Anchor href='https://facebook.github.io/react/'><img src={reactLogo} alt='' width='40'/></Anchor>
    const grommetLink = <Anchor href='https://grommet.github.io/'><img src={grommetLogo} alt=''/></Anchor>
    return (
      <GFooter justify='center' size='medium'>
        <Box
          direction='row'
          align='center'
          pad={{"between": "medium"}}>
          <Paragraph margin='none'>
            Built with {reactLink} & {grommetLink}
          </Paragraph>
        </Box>
      </GFooter>
    );
  }
}

export default Footer;
