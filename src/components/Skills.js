import React, {Component} from 'react';
import {Grid, Cell,ProgressBar} from 'react-mdl';
import '../App.css';

class Skills extends Component{
  render(){
    return(
    <Grid>
      <Cell col={12}>
      <div  style={{display: 'flex'}}>{this.props.skill}
        <ProgressBar  style={{margin: 'auto', width: '45%',marginRight: 'inherit'}}
           progress={this.props.progress} buffer={90}   />
      </div>
      </Cell>
    </Grid>
    );
  }
}
export default Skills;
