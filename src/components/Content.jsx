import React from "react";
import { Grid } from "semantic-ui-react";
import Nav from "./Nav";
import NamePicIntro from "./NamePicIntro";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Jobs from "./Jobs";
import Githubs from "./Githubs";
import Skills from "./Skills";
import Music from "./Music";

const Content = (props) => {
    return (
        <Grid columns="equal">
            <Grid.Row key="nav" id="nav">
                <Grid.Column>
                    <Nav
                        toggleSidebar={props.toggleSidebar}
                        isMobile={props.isMobile}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="name" id="name">
                <Grid.Column>
                    <NamePicIntro user={props.user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="about" id="about">
                <Grid.Column>
                    <AboutMe user={props.user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="skills" id="skills">
                <Grid.Column>
                    <Skills skills={props.skills} user={props.user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="jobs" id="jobs">
                <Grid.Column>
                    <Jobs jobs={props.jobs} user={props.user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="github" id="github">
                <Grid.Column>
                    <Githubs githubs={props.githubs} user={props.user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="music" id="music">
                <Grid.Column>
                    <Music user={props.user} isMobile={props.isMobile} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="contact" id="contact">
                <Grid.Column>
                    <Contact user={props.user} text="Contact" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Content;
