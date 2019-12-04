import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';


class App extends Component{
  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
}
  render(){
    return(
      <div className="demo-big-content">
      <Layout>

          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'} } to="/" onClick={() => this.hideToggle()}>
          Home
          </Link>}>
              <Navigation>
              <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
