import React from "react";
import { Grid, Popup, Image } from "semantic-ui-react";

import { SkillType } from "../Interfaces/Skill";

type Props = {
    skill: SkillType;
    index: number;
};

const Skill = ({ skill, index }: Props) => (
    <Grid.Column textAlign="center">
        <Popup
            key={skill.name + index}
            header={skill.name}
            position="bottom center"
            trigger={
                <Image
                    src={skill.imgUrl}
                    className="image-circle-small-skill"
                    verticalAlign="middle"
                    size="tiny"
                    circular
                />
            }
        />
    </Grid.Column>
);

export default Skill;
