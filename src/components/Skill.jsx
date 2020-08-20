import React from "react";
import { Grid, Popup, Image } from "semantic-ui-react";

const Skill = ({ skill, index }) => (
    <Grid.Column textAlign="center">
        <Popup
            key={skill.name + index}
            header={skill.name}
            position="bottom center"
            trigger={
                <Image
                    src={skill.img_url}
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
