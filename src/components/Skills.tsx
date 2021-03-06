import React from "react";
import { Grid } from "semantic-ui-react";

import Skill from "./Skill";
import SectionHeading from "./SectionHeading";
import { SkillType } from "../Interfaces/Skill";
import { User } from "../Interfaces/User";

type Props = {
    skills: SkillType[];
    user: User;
};

const Skills = ({ skills, user }: Props) => {
    if (!skills) {
        return <span className="font-heading font-size-large">Loading...</span>;
    }
    const skillsSorted = skills.sort((a, b) => a.orderId - b.orderId);

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
