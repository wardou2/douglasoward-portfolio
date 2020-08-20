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

const Content = ({ toggleSidebar, jobs, githubs, skills, user, isMobile }) => {
    return (
        <Grid columns="equal">
            <Grid.Row key="nav" id="nav">
                <Grid.Column>
                    <Nav toggleSidebar={toggleSidebar} isMobile={isMobile} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="name" id="name">
                <Grid.Column>
                    <NamePicIntro user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="about" id="about">
                <Grid.Column>
                    <AboutMe user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="skills" id="skills">
                <Grid.Column>
                    <Skills skills={skills} user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="jobs" id="jobs">
                <Grid.Column>
                    <Jobs jobs={jobs} user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="github" id="github">
                <Grid.Column>
                    <Githubs githubs={githubs} user={user} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="music" id="music">
                <Grid.Column>
                    <Music user={user} isMobile={isMobile} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row key="contact" id="contact">
                <Grid.Column>
                    <Contact user={user} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Content;
