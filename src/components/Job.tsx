import React from "react";
import { Card, List, Image } from "semantic-ui-react";

import { JobType } from "../Interfaces/Job";

type Props = {
    job: JobType;
};

const Job = ({ job }: Props) => {
    return (
        <Card raised className="corner-sharp text font-size-medium">
            <Card.Content>
                <Image
                    spaced
                    floated="left"
                    size="tiny"
                    src={job.imgUrl}
                    alt={job.company}
                />
                <Card.Header> {job.title} </Card.Header>
                <Card.Meta> {job.company} </Card.Meta>
                <Card.Meta>
                    {" "}
                    {job.startMonth} {job.startYear} - {job.endMonth}{" "}
                    {job.endYear ? job.endYear : "Present"}
                </Card.Meta>
            </Card.Content>
            {job.summary && (
                <Card.Content>
                    <Card.Meta> SUMMARY </Card.Meta>
                    <Card.Description>{job.summary} </Card.Description>
                </Card.Content>
            )}

            {job.responsibilities.length > 0 && (
                <Card.Content>
                    <Card.Meta> RESPONSIBILITIES </Card.Meta>
                    <Card.Description>
                        <List bulleted>
                            {job.responsibilities.map((res, index) => {
                                return (
                                    <List.Item
                                        key={res + index}
                                        className="font_size_small"
                                    >
                                        {res}
                                    </List.Item>
                                );
                            })}
                        </List>
                    </Card.Description>
                </Card.Content>
            )}
            {job.skillsUsed.length > 0 && (
                <Card.Content>
                    <Card.Meta> SKILLS USED </Card.Meta>
                    <Card.Description>
                        <List bulleted>
                            {job.skillsUsed.map((skill, index) => {
                                return (
                                    <List.Item
                                        key={index}
                                        className="font_size_small"
                                    >
                                        {skill}
                                    </List.Item>
                                );
                            })}
                        </List>
                    </Card.Description>
                </Card.Content>
            )}
        </Card>
    );
};

export default Job;
