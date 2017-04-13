import React, { Component } from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import Sidebar from 'grommet/components/Sidebar';
import Title from 'grommet/components/Title';

import InfoLinks from './InfoLinks';
import me from './me.jpg';

class SideNavigation extends Component {
  render() {
    return (
        <Sidebar colorIndex="light-1">
          <Box align='center'>
            <br/>
            <Image src={me}
              size="small"
              style={{borderRadius:'50%'}}/>
            <Title>Mohamed Isoukrane</Title>
            <Label style={{margin:0}}>Software Engineer</Label>
            <br/>
            <InfoLinks />
            <Anchor
              icon={
                <LinkNext />
              }
              label='experience'
              href='#experience'
              primary={true}
              reverse={false} />
              <Anchor
                icon={
                  <LinkNext />
                }
                label='Skills'
                href='#skills'
                primary={true}
                reverse={false} />
          </Box>
        </Sidebar>
    );
  }
}

export default SideNavigation;
