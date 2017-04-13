import React, { Component } from 'react';

import Anchor from 'grommet/components/Anchor';
import Mail from 'grommet/components/icons/base/Mail';
import SocialGithub from 'grommet/components/icons/base/SocialGithub';
import SocialLinkedin from 'grommet/components/icons/base/SocialLinkedin';

class InfoLinks extends Component {
  render() {
    return (
      <ul style={{listStyleType: 'none', marginLeft: 0}}>
        <li>
          <Anchor
            style={{fontSize:'89%'}}
            icon={
              <Mail />
            }
            label='isoukrane.mohamed(at)gmail.com'
            href='mailto:isoukrane.mohamed@gmail.com'/>
        </li>
        <li>
          <Anchor
            style={{fontSize:'89%'}}
            icon={
              <SocialGithub />
            }
            label='@misoukrane'
            href='https://github.com/misoukrane'
            target='blank'/>
        </li>
        <li>
          <Anchor
            style={{fontSize:'89%'}}
            icon={
              <SocialLinkedin />
            }
            label='LinkedIn'
            href='https://www.linkedin.com/in/mohamed-isoukrane-89507864/'
            target='blank'/>
        </li>
      </ul>
    );
  }
}

export default InfoLinks;
