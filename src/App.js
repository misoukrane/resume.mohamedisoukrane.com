import React, { Component } from 'react';
import GApp from 'grommet/components/App';
import Split from 'grommet/components/Split';
import ResumeContent from './ResumeContent';
import SideNavigation from './SideNavigation';
import '../node_modules/grommet/grommet.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <GApp centered={false}>
        <Split flex='right'>
          <SideNavigation />
          <ResumeContent />
        </Split>
      </GApp>
    );
  }
}

export default App;
