import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';

import Experiences from './Experiences';
import Skills from './Skills';

class ResumeContent extends Component {
  render() {
    return (
      <Article colorIndex='light-2'>
        <Section id='experience'>
          <Heading align='center'>Experience</Heading>
          <Experiences />
        </Section>
        <Section id='skills' full={true}>
          <Heading align='center'>Skills</Heading>
          <Skills />
        </Section>
      </Article>
    );
  }
}

export default ResumeContent;
