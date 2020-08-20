import React from "react";
import { Card, List, Image } from "semantic-ui-react";

import sanitizeArray from "../util/String";

const Job = ({ job }) => {
    const skillsUsed = sanitizeArray(job.skills_used);
    const responsibilities = sanitizeArray(job.responsibilities);

    return (
        <Card raised className="corner-sharp text font-size-medium">
            <Card.Content>
                <Image
                    spaced
                    floated="left"
                    size="tiny"
                    src={job.img_url}
                    alt={job.company}
                />
                <Card.Header> {job.title} </Card.Header>
                <Card.Meta> {job.company} </Card.Meta>
                <Card.Meta>
                    {" "}
                    {job.start_month} {job.start_year} - {job.end_month}{" "}
                    {job.end_year ? job.end_year : "Present"}
                </Card.Meta>
            </Card.Content>
            {job.summary && (
                <Card.Content>
                    <Card.Meta> SUMMARY </Card.Meta>
                    <Card.Description>{job.summary} </Card.Description>
                </Card.Content>
            )}

            {responsibilities.length > 0 && (
                <Card.Content>
                    <Card.Meta> RESPONSIBILITIES </Card.Meta>
                    <Card.Description>
                        <List bulleted>
                            {responsibilities.map((res, index) => {
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
            {skillsUsed.length > 0 && (
                <Card.Content>
                    <Card.Meta> SKILLS USED </Card.Meta>
                    <Card.Description>
                        <List bulleted>
                            {skillsUsed.map((skill) => {
                                return (
                                    <List.Item
                                        key={skill}
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
