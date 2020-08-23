import React from "react";
import { Grid, Card } from "semantic-ui-react";
import SectionHeading from "./SectionHeading";
import Job from "./Job";
import { JobType } from "../Interfaces/Job";
import { User } from "../Interfaces/User";

type Props = {
    jobs: JobType[];
    user: User;
};

const Jobs = ({ jobs, user }: Props) => {
    if (!jobs) {
        return <span className="font-heading font-size-large">Loading...</span>;
    }
    const jobsSorted = jobs.sort((a, b) => a.orderId - b.orderId);

    return (
        <div>
            <SectionHeading text="Positions" user={user} />

            <Grid columns={"equal"} stackable centered>
                <Grid.Row columns={16} padded="horizontally" centered>
                    <Grid.Column width={2} />
                    <Grid.Column width={12}>
                        <Card.Group itemsPerRow={1}>
                            {jobsSorted.map((job, index) => (
                                <Job key={job.company + index} job={job} />
                            ))}
                        </Card.Group>
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default Jobs;
