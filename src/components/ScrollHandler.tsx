import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {
    children: any;
}

const ScrollHandler = ({ location: { hash }, children }: Props) => {
    useEffect(() => {
        const element = document.getElementById(hash.replace("#", ""));

        setTimeout(() => {
            window.scrollTo({
                behavior: element ? "smooth" : "auto",
                top: element ? element.offsetTop : 0,
            });
        }, 100);
    }, [hash]);

    return children;
};

ScrollHandler.propTypes = {
    children: PropTypes.node.isRequired,
    hash: PropTypes.string,
};

export default withRouter(ScrollHandler);
