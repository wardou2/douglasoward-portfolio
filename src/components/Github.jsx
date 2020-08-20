import React from "react";
import { Card, Image, Divider, List } from "semantic-ui-react";

const displayLinks = (github) => {
    if (github.repo_url_back && github.demo_url) {
        return (
            <div style={{ textAlign: "center" }}>
                <a
                    href={github.repo_url_front}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Front End Repo
                </a>{" "}
                |{" "}
                <a
                    href={github.repo_url_back}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Back End Repo
                </a>{" "}
                |{" "}
                <a
                    href={github.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Demo
                </a>
            </div>
        );
    }
    if (github.repo_url_back) {
        return (
            <div style={{ textAlign: "center" }}>
                <a
                    href={github.repo_url_front}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Front End Repo
                </a>{" "}
                |{" "}
                <a
                    href={github.repo_url_back}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Back End Repo
                </a>
            </div>
        );
    }
    if (github.demo_url) {
        return (
            <div style={{ textAlign: "center" }}>
                <a
                    href={github.repo_url_front}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github Repo
                </a>{" "}
                |{" "}
                <a
                    href={github.demo_url}
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
                href={github.repo_url_front}
                target="_blank"
                rel="noopener noreferrer"
            >
                Github Repo
            </a>
        </div>
    );
};

const Github = (props) => {
    const { github } = props;
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
                    src={github.img_url}
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
