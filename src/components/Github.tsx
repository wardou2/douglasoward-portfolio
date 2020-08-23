import React from "react";
import { Card, Image, Divider, List } from "semantic-ui-react";
import { GithubType } from "../Interfaces/Github";

type Props = {
    github: GithubType;
};

const displayLinks = (github: GithubType) => {
    if (github.repoUrlBack && github.demoUrl) {
        return (
            <div style={{ textAlign: "center" }}>
                <a
                    href={github.repoUrlFront}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Front End Repo
                </a>{" "}
                |{" "}
                <a
                    href={github.repoUrlBack}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Back End Repo
                </a>{" "}
                |{" "}
                <a
                    href={github.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Demo
                </a>
            </div>
        );
    }
    if (github.repoUrlBack) {
        return (
            <div style={{ textAlign: "center" }}>
                <a
                    href={github.repoUrlFront}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Front End Repo
                </a>{" "}
                |{" "}
                <a
                    href={github.repoUrlBack}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Back End Repo
                </a>
            </div>
        );
    }
    if (github.demoUrl) {
        return (
            <div style={{ textAlign: "center" }}>
                <a
                    href={github.repoUrlFront}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github Repo
                </a>{" "}
                |{" "}
                <a
                    href={github.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Demo
                </a>
            </div>
        );
    }
    return (
        <div style={{ textAlign: "center" }}>
            <a
                href={github.repoUrlFront}
                target="_blank"
                rel="noopener noreferrer"
            >
                Github Repo
            </a>
        </div>
    );
};

const Github = ({ github }: Props) => {
    return (
        <Card raised className="corner-sharp">
            <Card.Content target="_blank" className="card-height">
                <Card.Header
                    style={{ marginBottom: "10px" }}
                    textAlign="center"
                >
                    {github.name}
                </Card.Header>
                <Image
                    size="medium"
                    style={{
                        display: "block",
                        margin: "auto",
                        marginBottom: "10px",
                    }}
                    rounded
                    src={github.imgUrl}
                />
                <Card.Meta>
                    <div>{displayLinks(github)}</div>
                </Card.Meta>
                <Divider />
                <Card.Meta> {github.summary} </Card.Meta>
                <Divider />
                <Card.Description>
                    <List relaxed bulleted className="left text">
                        {github.contribution.map((con) => {
                            return <List.Item key={con}>{con}</List.Item>;
                        })}
                    </List>
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default Github;
