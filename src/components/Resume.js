import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from '../Images/avatar.png';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
class Resume extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src={avatar}
                className="avatar-img"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>David Askenazy</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>The object of this summary is to clear out my imployement and student situation, althought it is focused on Programming,
            it is not exclusive to the rest
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Country</h5>
            <p>Mar del Plata, Buenos Aires, Argentina</p>
            <h5>Phone</h5>
            <p>+54 223 681 3478</p>
            <h5>Email</h5>
            <p>davidask.da@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear="In Curse"
              schollName="Universidad Tecnológica Nacional Regional Mar del Plata"
              schollDescription="Programming technician"
            />

            <Education
              startYear={2016}
              endYear="desist"
              schollName="Universidad Nacional de Mar del Plata"
              schollDescription="Bachelor's degree in Economics"
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Courses</h2>
              <Education
                startYear=""
                endYear=""
                schollName="JAVA/SQL"
                schollDescription="PLAN 111MIL"
              />
              <Education
                startYear=""
                endYear=""
                schollName="React.js Course (Flux structure, Redux.js, PubSub.js, API REST, Reflux.js, Think of components, Bootstrap + React.js, JSX, ES6)"
                schollDescription="Udemy"
              />
              <hr style={{borderTop: '3px solid #e22947'}}/>

              <h2>Experience</h2>
              <Experience
                startYear={"Dec 2014"}
                endYear={"Dec 2015"}
                jobName="Receptionist"
                from="Hotel Riazor"
                jobDescription="advice on rooms rental, Fiscal ticket, Invoice A and B, reservations and sales, cash handling "
              />
              <Experience
                startYear={"Jan 2016"}
                endYear={"Mar 2016"}
                jobName="Intangible sales"
                from="MyM Club"
                jobDescription="Subscription sales to tourist services, advice on them and contracts preparation"
              />
              <Experience
                startYear={"Dec 2016"}
                endYear={"Mar 2017"}
                jobName="Cashier"
                from="Fonte D' Oro"
                jobDescription="Cash, tickets, re-assignaments, cash and electronic payment, fixed fund, surrender management, collections to deposit, safe, Lot closures and stock controls"
              />
              <Experience
                startYear={"Aug 2017"}
                endYear={"Aug 2018"}
                jobName="Owner"
                from="Kiosco"
                jobDescription="Opening and closing of a commercial location, accounting, stock management, cash, suppliers, current account and consignaments, posnet, virtual loads and service charge"
              />
              <Experience
                startYear={"Jan 2019"}
                endYear={"Actuality"}
                jobName="Owner"
                from="E-commerce"
                jobDescription="Sale of merchandise by internet (rentail and wholesale), accounting and logistics circuit, multiple sales channels, merchandise financing, complete activity management"
              />
              <Experience
                startYear={"Mar 2019"}
                endYear={"Aug 2019"}
                jobName="Sales person"
                from="Autos del Plata S.A"
                jobDescription="Advice and sales of FIAT plans, preparation of contracts and everything derived from the sale"
              />
              <hr style={{borderTop: '3px solid #e22947'}}/>
              <Skills
                skill="JAVA"
                progress={90}
              />
              <Skills
                skill="SQL"
                progress={70}
              />
              <Skills
                skill="HIBERNATE"
                progress={45}
              />
              <Skills
                skill="MAVEN"
                progress={65}
              />
              <Skills
                skill="SPRING"
                progress={65}
              />
              <Skills
                skill="POO Programming"
                progress={65}
              />
              <Skills
                skill="Android with JAVA"
                progress={65}
              />
              <Skills
                skill="GIT"
                progress={65}
              />
              <Skills
                skill="JAVASCRIPT"
                progress={65}
              />
              <Skills
                skill="BOOTSTRAP"
                progress={65}
              />
              <Skills
                skill="REACT.JS"
                progress={65}
              />
              <Skills
                skill="Flux, Redux.js, PubSub.js, Reflux.js"
                progress={65}
              />
              <Skills
                skill="JSX, ES"
                progress={65}
              />
              <Skills
                skill="API REST"
                progress={65}
              />
          </Cell>
        </Grid>

      </div>
    );
  }
}

export default Resume;
