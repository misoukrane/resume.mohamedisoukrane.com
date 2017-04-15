import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';

import Experiences from './Experiences';
import Footer from './Footer';
import Skills from './Skills';

class ResumeContent extends Component {
  render() {
    return (
      <Article colorIndex='light-2'>
        <Section id='skills' full={true}>
          <Heading align='center'>Skills</Heading>
          <Skills />
        </Section>
        <Section id='experience'>
          <Heading align='center'>Experience</Heading>
          <Experiences />
        </Section>
        <Box pad='medium' textAlign='center' colorIndex='grey-4-a'>
          <Footer />
        </Box>
      </Article>
    );
  }
}

export default ResumeContent;
