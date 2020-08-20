import "./App.css";
import React from "react";
import { Icon, Menu, Segment, Sidebar, Sticky } from "semantic-ui-react";

import Content from "./components/Content";
import NavLinks from "./components/NavLinks";

const USER = {
    id: 5,
    first_name: "Douglas",
    last_name: "Ward",
    email: "ward92@gmail.com",
    phone: "4345483214",
    img_url: "/images/temp-avatar.png",
    bio:
        "Seattle-based full stack web developer with a focus on UI. I have experience with TypeScript, React, Ruby on Rails, and much more. Prior to transitioning to code, I worked as an electrical engineer in robotics and automation for aerospace manufacturing. In my free time, I write and produce music.",
    intro:
        "Enjoys good code, coffee, making music, and a cold IPA on a mountain peak.",
    title: "Full Stack Web Developer",
    password_digest:
        "$2a$12$Xw2QuHuo0JQTQ2Rn9q2.L.3JV5RJmNe.y/iHjaBWeXVZIxh5OSxf2",
    username: "wardou2",
    color_theme: "theme-berries",
};

const JOBS = [
    {
        company: "Electroimpact",
        title: "Electrical Engineer",
        summary:
            "Lead design and build of electrical segment for Accurate Robot System from conception to delivery. Delivered to customer on time and under budget.",
        start_month: "Dec",
        start_year: 2015,
        end_month: "Jul",
        end_year: 2018,
        responsibilities: [
            "Designed, debugged, and maintained printed circuit boards so that customer could meet manufacturing deadlines.",
            "Managed complex library of schematics and 3D models to track parts for the entire life cycle of a project.",
            "Experience working with clients on-site at Airbus UK and Boeing Everett.",
        ],
        skills_used: [],
        img_url: "https://www.electroimpact.com/Images/LogoBanner_Color.png",
        user_id: 5,
        order_id: 1,
    },
    {
        company: "ExtraHop",
        title: "Software Developer I - UI",
        summary:
            "Built and maintained an extensive web app as a member of the UI team",
        start_month: "Dec",
        start_year: 2019,
        end_month: "May",
        end_year: 2020,
        responsibilities: [
            "Developed new features with modern ESNext patterns in TypeScript and React in a Docker container",
            "Supported legacy features with Redux and AngularJS",
            "Experience in Agile Scrum environment with full development cycle from planning to release",
            "Embedded in fast-paced feature team with FE and BE engineers, QA, PM, and Tech Pubs",
        ],
        skills_used: ["TypeScript", "React", "SASS", "Linux", "Docker"],
        img_url:
            "https://security-img.scdn6.secure.raxcdn.com/news/612/extrahop-cloud-network-detection-920x533.png",
        user_id: 5,
        order_id: 0,
    },
];

const SKILLS = [
    {
        id: 27,
        name: "ES6 Javascript",
        img_url:
            "https://www.shareicon.net/data/512x512/2016/07/06/106573_software_512x512.png",
        order_id: 1,
        user_id: 5,
    },
    {
        id: 24,
        name: "React.js",
        img_url:
            "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png",
        order_id: 0,
        user_id: 5,
    },
    {
        id: 25,
        name: "React Native",
        img_url:
            "https://pluralsight2.imgix.net/paths/images/react-0f6558f88f.png",
        order_id: 3,
        user_id: 5,
    },
    {
        id: 40,
        name: "Django",
        img_url:
            "https://cdn.iconscout.com/icon/free/png-256/django-2-282855.png",
        order_id: 5,
        user_id: 5,
    },
    {
        id: 41,
        name: "SASS/CSS",
        img_url:
            "https://sass-lang.com/assets/img/styleguide/seal-black-1e36d095.png",
        order_id: 6,
        user_id: 5,
    },
    {
        id: 39,
        name: "TypeScript",
        img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        order_id: 2,
        user_id: 5,
    },
    {
        id: 26,
        name: "Ruby on Rails",
        img_url:
            "https://png-2.findicons.com/files/icons/1607/ruby_on_rails/512/ror_logo.png",
        order_id: 5,
        user_id: 5,
    },
];

const GITHUBS = [
    {
        id: 11,
        repo_url_front: "https://github.com/wardou2/album-report",
        repo_url_back: null,
        demo_url: null,
        name: "Album Report",
        img_url:
            "https://raw.githubusercontent.com/wardou2/album-report/master/public/images/Album-Report-Example.png",
        summary: "A website for tracking and taking notes on favorite albums.",
        contribution: [
            "Implemented Ruby on Rails API backend with endpoints for artists, notes, and albums.",
            "Developed a user interface using ES6 Javascript.",
            "Leveraged the Last.fm API to provide album search and information functionality.",
        ],
        user_id: 5,
        order_id: 2,
    },
    {
        id: 10,
        repo_url_front: "https://github.com/wardou2/portfolio-react",
        repo_url_back: "https://github.com/wardou2/portfolio-rails",
        demo_url: "",
        name: "Portfolio (this site!)",
        img_url:
            "https://raw.githubusercontent.com/wardou2/portfolio-react/master/public/images/Portfolio-Example.png",
        summary: "A single-page portfolio website for programmers.",
        contribution: [
            "Implemented a user interface employing React and Semantic-React.",
            "Developed Ruby on Rails API backend to serve data.",
            "Utilized JSON Web Tokens and Local Storage to store encrypted user information client-side.",
            "Constructed edit-in-place functionality with React and Semantic-React.",
        ],
        user_id: 5,
        order_id: 1,
    },
    {
        id: 9,
        repo_url_front: "https://github.com/wardou2/BeatquencherReact",
        repo_url_back: "https://github.com/wardou2/BeatquencherRails",
        demo_url: "https://beatquencher.herokuapp.com",
        name: "Beatquencher",
        img_url:
            "https://repository-images.githubusercontent.com/190749915/a0fc7980-9cc2-11e9-8078-3107bf13dfea",
        summary:
            "An online music sequencer with customizable instruments for quickly sketching musical ideas.",
        contribution: [
            "Utilized Tone JS package to implement synthesizers.",
            "Used React to create a responsive sequencer that updates instruments and notes in real time.",
            "Developed a Ruby on Rails API backend with endpoints for Users, Projects, Instruments, Scenes, and Tracks.",
            "Implemented login with Google OAuth and Cookies to authenticate users.",
        ],
        user_id: 5,
        order_id: 0,
    },
];

const DEFAULT_STATE = {
    user: USER,
    jobs: JOBS,
    skills: SKILLS,
    githubs: GITHUBS,
    sidebarVisible: false,
    isMobile: false,
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
    }

    componentDidMount() {
        this.setState({
            isMobile: window.matchMedia("only screen and (max-width: 760px)")
                .matches,
        });
    }

    toggleSidebar = () => {
        this.setState({
            sidebarVisible: !this.state.sidebarVisible,
        });
    };

    render() {
        return (
            <Sidebar.Pushable as={Segment} className="fix-sidebar">
                <Sticky>
                    <Sidebar
                        animation="overlay"
                        as={Menu}
                        direction="right"
                        icon="labeled"
                        inverted
                        vertical
                        visible={this.state.sidebarVisible}
                        width="wide"
                    >
                        <Menu.Item as="a" onClick={this.toggleSidebar}>
                            <Icon name="bars" size="mini" />
                            Close
                        </Menu.Item>

                        <NavLinks
                            isMobile={this.state.isMobile}
                            toggleSidebar={this.toggleSidebar}
                        />
                    </Sidebar>
                </Sticky>
                <Sidebar.Pusher dimmed={false}>
                    <Segment basic className={this.state.user.color_theme}>
                        <Content
                            toggleSidebar={this.toggleSidebar}
                            jobs={this.state.jobs}
                            githubs={this.state.githubs}
                            skills={this.state.skills}
                            user={this.state.user}
                            isMobile={this.state.isMobile}
                        />
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default App;
