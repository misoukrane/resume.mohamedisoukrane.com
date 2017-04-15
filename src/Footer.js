import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import GFooter from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';

class Footer extends Component {
  render() {
    return (
      <GFooter justify='center' size='medium'>
        <Box
          direction='row'
          align='center'
          pad={{"between": "medium"}}>
          <Paragraph margin='none'>
            © 2017 Mohamed Isoukrane
          </Paragraph>
        </Box>
      </GFooter>
    );
  }
}

export default Footer;
