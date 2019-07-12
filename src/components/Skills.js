import React from 'react'
import { Grid, Popup, Image, Button } from 'semantic-ui-react'
import Skill from './Skill'

import SectionHeading from './SectionHeading'

const SkillsOld = (props) => {
  let skills = props.skills.sort( (a,b) => a.order_id - b.order_id )
  let columns=1
  props.loggedIn ? columns = skills.length*2+3 : columns = skills.length + 2
  return (
  <Grid columns='equal'>
    <SectionHeading text="Primary Skillsets"
      startEdit={_ => props.startEdit(skills, 'skills')}
      startNew={_ => props.startNew('skills')}
      editing={props.editing}
      loggedIn={props.loggedIn}
      sectionEdit={true}
      sectionNew={true}
      user={props.user}
    />
    <Grid.Row columns={columns} verticalAlign="middle" textAlign="center">
      <Grid.Column>{' '}</Grid.Column>
      {skills.map( (skill, index) => {
        return(<>
              {props.loggedIn && index === 0
                ? <Grid.Column textAlign="center"><Button type="button" onClick={_ => props.shiftOrder('skills', skill, false)} circular icon="long arrow alternate left"/></Grid.Column>
                : null}
              <Grid.Column textAlign="center">
              <Popup key={skill.name} header={skill.name} textAlign="center"
                position="bottom center" trigger={
                  <Image src={skill.img_url} className="image-circle-small-skill"
                  verticalAlign="middle" size="tiny" circular/>
                }
              />
              </Grid.Column>
              {props.loggedIn && index < skills.length -1
                ? <Grid.Column textAlign="center"><Button type="button" onClick={_ => props.shiftOrder('skills', skill, true)} circular icon="arrows alternate horizontal"/></Grid.Column>
                : null}
              {props.loggedIn && index === skills.length -1
                ? <Grid.Column textAlign="center"><Button type="button" onClick={_ => props.shiftOrder('skills', skill, true)} circular icon="long arrow alternate right"/></Grid.Column>
                : null}
        </>)
      })}
      <Grid.Column>{' '}</Grid.Column>
    </Grid.Row>
    <br />
  </Grid>
  )
}

class Skills extends React.Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false
    }
  }

  toggleModal() {
    this.setState({modalVisible: !this.state.modalVisible})
  }

  render() {
    if (!this.props.skills) {
      return <span className="font-heading font-size-large">Loading...</span>
    } else {
      let skills = this.props.skills.sort( (a,b) => a.order_id - b.order_id )
      return (
      <div>
        <SectionHeading text="Primary Skillsets"
          editing={this.props.editing}
          loggedIn={this.props.loggedIn}
          sectionEdit={false}
          sectionNew={true}
          startEdit={_ => this.props.startEdit(skills, 'skills')}
          startNew={_ => this.props.startNew('skills')}
          user={this.props.user}
        />

        <Grid columns={16} stackable centered>
          <Grid.Column />
          <Grid columns={'equal'} textAlign="center" stackable centered>
            {skills.map( (skill, index) => {
              return(
                <Skill skill={skill}
                  index={index}
                  key={skill.name+index}
                  loggedIn={this.props.loggedIn}
                  startEdit={this.props.startEdit}
                />)
            })}
          </Grid>
          <Grid.Column />
        </Grid>
        <br />
      </div>
      )
    }
  }
}


export default Skills
