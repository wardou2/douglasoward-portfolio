import React from "react";
import { Grid } from "semantic-ui-react";

import Skill from "./Skill";
import SectionHeading from "./SectionHeading";

const Skills = ({ skills, user }) => {
    if (!skills) {
        return <span className="font-heading font-size-large">Loading...</span>;
    }
    const skillsSorted = skills.sort((a, b) => a.order_id - b.order_id);

    return (
        <div>
            <SectionHeading text="Primary Skillsets" user={user} />

            <Grid columns={16} stackable centered>
                <Grid.Column />
                <Grid columns={"equal"} textAlign="center" stackable centered>
                    {skillsSorted.map((skill, index) => {
                        return (
                            <Skill
                                skill={skill}
                                index={index}
                                key={skill.name + index}
                            />
                        );
                    })}
                </Grid>
                <Grid.Column />
            </Grid>
            <br />
        </div>
    );
};

export default Skills;
