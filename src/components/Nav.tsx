import React from "react";

import { Icon, Grid } from "semantic-ui-react";
import NavLinks from "./NavLinks";
import useIsMobile from "../util/hooks";

type Props = {
    toggleSidebar: () => void;
};

const Nav = ({ toggleSidebar }: Props) => {
    return (
        <Grid>
            {useIsMobile() ? (
                <Grid.Row>
                    <Grid.Column width={8} />
                    <Grid.Column textAlign="right" width={8}>
                        <span className="item font-heading">
                            Navigation{"   "}
                        </span>
                        <Icon
                            name="angle double right"
                            color="black"
                            size="small"
                        />
                    </Grid.Column>
                </Grid.Row>
            ) : (
                <Grid.Row>
                    <Grid.Column width={15} stretched>
                        <NavLinks toggleSidebar={toggleSidebar} />
                    </Grid.Column>
                </Grid.Row>
            )}
        </Grid>
    );
};

export default Nav;
