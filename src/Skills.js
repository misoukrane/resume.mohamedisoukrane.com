import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Meter from 'grommet/components/Meter';
import Split from 'grommet/components/Split';

import RawSkills from './RawSkills';

class Skills extends Component {
  render() {
    return (
      <Split
        priority='left'
        flex='both'
        showOnResponsive='both'>
        <Box textAlign='center'>
          <Heading tag='h4'>
            Programming Languages
          </Heading>
          <Meter
            size='xsmall'
            type='spiral'
            series={RawSkills.programmingLanguages}/>
          <br/>
          <Heading tag='h4'>FrontEnd</Heading>
          <Meter
            size='xsmall'
            type='spiral'
            series={RawSkills.frontEnd}/>
        </Box>
        <Box
          textAlign='center'>
          <Heading tag='h4'>Architectures</Heading>
          <Meter
            size='xsmall'
            type='spiral'
            series={RawSkills.architectures}/>
          <br/>
          <Heading tag='h4'>Soft Skills</Heading>
          <Meter
            size='xsmall'
            type='spiral'
            series={RawSkills.soft}/>
        </Box>
        <Box
          textAlign='center'>
          <Heading tag='h4'>Databases</Heading>
          <Meter
            size='xsmall'
            type='spiral'
            series={RawSkills.databases}/>
          <br/>
          <Heading tag='h4'>
            Natural Languages
          </Heading>
          <Meter
            size='xsmall'
            type='spiral'
            series={RawSkills.misc}/>
        </Box>
      </Split>
    );
  }
}

export default Skills;
