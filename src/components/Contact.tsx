import React, { useState } from "react";
import { Grid, Icon, Button } from "semantic-ui-react";

import { User } from "../Interfaces/User";

type Props = {
    user: User;
};

const parsePhoneNum = (num: string) => {
    if (num) {
        return `(${num.slice(0, 3)}) ${num.slice(3, 6)} ${num.slice(6)}`;
    }
    return "";
};

const Contact = ({ user }: Props) => {
    const [hideInfo, setHideInfo] = useState(true);
    const toggleContact = () => {
        setHideInfo(!hideInfo);
    };

    return (
        <Grid columns={16}>
            <Grid.Row />
            <Grid.Row centered>
            
            </Grid.Row>
            <Grid.Row
                only="computer tablet"
                className={`${user.colorTheme}-heading`}
                verticalAlign="middle"
            >
                <Grid.Column width={1} />
                <Grid.Column width={4} verticalAlign="middle">
                    <span className="font-size-large font-heading">
                        Contact
                    </span>
                </Grid.Column>
                {hideInfo ? (
                    <Grid.Column width={6} className="text" textAlign="center">
                        <Button secondary onClick={toggleContact}>
                            Show Contact Info
                        </Button>
                    </Grid.Column>
                ) : (
                    <>
                        <Grid.Column
                            width={3}
                            className="text"
                            textAlign="center"
                        >
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </Grid.Column>
                        <Grid.Column
                            width={3}
                            className="text"
                            textAlign="center"
                        >
                            <a href={`tel: +1${user.phone}`}>
                                +1 {parsePhoneNum(user.phone)}
                            </a>
                        </Grid.Column>
                    </>
                )}
                <Grid.Column width={4} />
            </Grid.Row>
            <Grid.Row
                only="mobile"
                className={`${user.colorTheme}-heading`}
                verticalAlign="middle"
            >
                <Grid.Column width={1} />
                <Grid.Column width={4} verticalAlign="middle">
                    <span className="font-size-large font-heading">
                        Contact
                    </span>
                </Grid.Column>
                {hideInfo ? (
                    <Grid.Column width={10} className="text" textAlign="center">
                        <Button secondary onClick={toggleContact}>
                            Show Contact Info
                        </Button>
                    </Grid.Column>
                ) : (
                    <Grid.Column width={10} className="text" textAlign="center">
                        <Grid.Row>
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </Grid.Row>
                        <Grid.Row>
                            <a href={`tel: +1${user.phone}`}>
                                +1 {parsePhoneNum(user.phone)}
                            </a>
                        </Grid.Row>
                    </Grid.Column>
                )}
            </Grid.Row>
        </Grid>
    );
};

export default Contact;
