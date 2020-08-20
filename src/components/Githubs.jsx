import React from "react";
import { Grid, Card } from "semantic-ui-react";
import Github from "./Github";
import SectionHeading from "./SectionHeading";

const Githubs = (props) => {
    if (!props.githubs) {
        return <span className="font-heading font-size-large">Loading...</span>;
    }
    const githubs = props.githubs.sort((a, b) => a.order_id - b.order_id);
    return (
        <div>
            <SectionHeading text="Featured Repos" user={props.user} />

            <Grid columns={"equal"} stackable centered>
                <Grid.Row columns={16}>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <Card.Group centered doubling itemsPerRow={2}>
                            <br />
                            {githubs.map((github, index) => {
                                return <Github github={github} key={index} />;
                            })}
                        </Card.Group>
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>
                <br />
            </Grid>
        </div>
    );
};

export default Githubs;
