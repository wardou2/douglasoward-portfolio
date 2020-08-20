import React from "react";
import { Link } from "react-router-dom";
import { Icon, Grid } from "semantic-ui-react";
import NavLinks from "./NavLinks";

const Nav = (props) => {
    return (
        <Grid>
            {props.isMobile ? (
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
                        <Link
                            className="item"
                            onClick={props.toggleSidebar}
                            to=""
                        >
                            <Icon color="black" name="bars" size="large" />
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            ) : (
                <Grid.Row>
                    <Grid.Column width={15} stretched>
                        <NavLinks
                            toggleSidebar={props.toggleSidebar}
                            isMobile={props.isMobile}
                        />
                    </Grid.Column>
                </Grid.Row>
            )}
        </Grid>
    );
};

export default Nav;
