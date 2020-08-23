import React from "react";
import { Grid } from "semantic-ui-react";

import SectionHeading from "./SectionHeading";
import { User } from "../Interfaces/User";
import useIsMobile from "../util/hooks";

type Props = {
    user: User;
    music: string[];
};

const Music = ({ user, music }: Props) => {
    const width = useIsMobile() ? 16 : 6;
    const getEmbeds = () => {
        return music.map((url, index) => {
            return (
                <Grid.Column width={width} key={index}>
                    <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={url}
                        title={url}
                    ></iframe>
                </Grid.Column>
            );
        });
    };

    return (
        <div>
            <SectionHeading text="Music" user={user} />
            <Grid>
                <Grid.Row centered>{getEmbeds()}</Grid.Row>
            </Grid>
        </div>
    );
};

export default Music;
