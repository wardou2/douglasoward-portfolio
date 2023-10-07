import React from "react";
import { Menu } from "semantic-ui-react";

import useIsMobile from "../util/hooks";

type Props = {
    toggleSidebar: () => void;
};

const LINK_DETAILS = [
    {
        name: "ABOUT ME",
        link: "/#about",
    },
    {
        name: "SKILLS",
        link: "/#skills",
    },
    {
        name: "JOBS",
        link: "/#jobs",
    },
    {
        name: "GITHUB",
        link: "/#github",
    },
    {
        name: "MUSIC",
        link: "/#music",
    },
    {
        name: "CONTACT",
        link: "/#contact",
    },
];

const getLinks = () =>
    LINK_DETAILS.map((entry) => (
        <Menu.Item key={entry.name}>
            
        </Menu.Item>
    ));
const getLinksMobile = (toggleSidebar: () => void) =>
    LINK_DETAILS.map((entry) => (
        <Menu.Item key={entry.name}>
           
        </Menu.Item>
    ));

const NavLinks = ({ toggleSidebar }: Props) => {
    return useIsMobile() ? (
        <Menu borderless secondary vertical fluid>
            {getLinksMobile(toggleSidebar)}
        </Menu>
    ) : (
        <Menu borderless secondary stackable>
            {getLinks()}
        </Menu>
    );
};

export default NavLinks;
