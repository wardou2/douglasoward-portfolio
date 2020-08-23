import React from "react";
import { Grid, Card } from "semantic-ui-react";
import Github from "./Github";
import SectionHeading from "./SectionHeading";
import { User } from "../Interfaces/User";
import { GithubType } from "../Interfaces/Github";

type Props = {
    user: User;
    githubs: GithubType[];
};

const Githubs = ({ githubs, user }: Props) => {
    if (!githubs) {
        return <span className="font-heading font-size-large">Loading...</span>;
    }
    const githubsSorted = githubs.sort((a, b) => a.orderId - b.orderId);
    return (
        <div>
            <SectionHeading text="Featured Repos" user={user} />

            <Grid columns={"equal"} stackable centered>
                <Grid.Row columns={16}>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <Card.Group centered doubling itemsPerRow={2}>
                            <br />
                            {githubsSorted.map((github, index) => {
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
