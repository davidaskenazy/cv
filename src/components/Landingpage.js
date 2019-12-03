import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from '../Images/avatar.png';
class Landingpage extends Component{
  render(){
    return(
      <div style={{width: '100%' , margin: 'auto'}}>
        <Grid className ="Landing-grid">
          <Cell col={12}>
          <img src={avatar}
            className="avatar-img"
          />

          <div className="banner-text">
            <h1>David Askenazy</h1>
            <hr/>
            <h3>Full Stack Developer</h3>

            <hr/>

            <p>MongoDB | Express | React | NodeJS</p>
            <p>Java | Spring | Maven | Hibernate | SQL</p>

            <div className="social-links">

              {/* LinkedIn*/}
              <a href="https://www.linkedin.com/in/davidaskenazy/" rel= "noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* GitHub*/}
              <a href="https://github.com/davidaskenazy" rel= "noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* instagram*/}
              <a href="https://www.instagram.com/davidaskenazy/" rel= "noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>

              {/* whatsapp*/}
              <a href="https://wa.me/542236813478" rel= "noopener noreferrer" target="_blank">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>

              {/* Email*/}
              <a href="mailto:davidask.da@gmail.com" rel= "noopener noreferrer" target="_blank">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
