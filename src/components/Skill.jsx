import React from "react";
import { Grid, Popup, Image } from "semantic-ui-react";

const Skill = (props) => (
    <Grid.Column textAlign="center">
        <Popup
            key={props.skill.name + props.index}
            header={props.skill.name}
            position="bottom center"
            trigger={
                <Image
                    src={props.skill.img_url}
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
