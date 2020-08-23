import React from "react";
import { Grid } from "semantic-ui-react";

import SectionHeading from "./SectionHeading";
import { User } from "../Interfaces/User";

type Props = {
    user: User;
};

const AboutMe = ({ user }: Props) => {
    if (!user.bio) {
        return (
            <div>
                <SectionHeading text="About Me" user={user} />
            </div>
        );
    }
    const words = user.bio.split(" ");

    return (
        <div>
            <SectionHeading text="About Me" user={user} />
            <Grid columns="equal">
                <Grid.Row columns={16}>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <span className="text">
                            {words.map((word) => {
                                return word.includes("http://") ? (
                                    <a
                                        href={word}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {`${word.slice(7)} `}
                                    </a>
                                ) : (
                                    `${word} `
                                );
                            })}
                        </span>
                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                <br />
            </Grid>
        </div>
    );
};

export default AboutMe;
