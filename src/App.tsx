import "./App.css";
import React, { useState } from "react";
import { Icon, Menu, Segment, Sidebar, Sticky } from "semantic-ui-react";

import Content from "./components/Content";
import NavLinks from "./components/NavLinks";
import { User } from "./Interfaces/User";
import { JobType } from "./Interfaces/Job";
import { SkillType } from "./Interfaces/Skill";
import { GithubType } from "./Interfaces/Github";

const USER: User = {
    id: 5,
    firstName: "Douglas",
    lastName: "Ward",
    email: "ward92@gmail.com",
    phone: "4345483214",
    imgUrl: "/images/temp-avatar.png",
    bio:
        "Seattle-based full stack web developer with a focus on UI. I have experience with TypeScript, React, Ruby on Rails, and much more. Prior to transitioning to code, I worked as an electrical engineer in robotics and automation for aerospace manufacturing. In my free time, I write and produce music.",
    intro:
        "Enjoys good code, coffee, making music, and a cold IPA on a mountain peak.",
    title: "Full Stack Web Developer",
    colorTheme: "theme-berries",
};

const JOBS: JobType[] = [
    {
        company: "Electroimpact",
        title: "Electrical Engineer",
        summary:
            "Lead design and build of electrical segment for Accurate Robot System from conception to delivery. Delivered to customer on time and under budget.",
        startMonth: "Dec",
        startYear: 2015,
        endMonth: "Jul",
        endYear: 2018,
        responsibilities: [
            "Designed, debugged, and maintained printed circuit boards so that customer could meet manufacturing deadlines.",
            "Managed complex library of schematics and 3D models to track parts for the entire life cycle of a project.",
            "Experience working with clients on-site at Airbus UK and Boeing Everett.",
        ],
        skillsUsed: [],
        imgUrl: "https://www.electroimpact.com/Images/LogoBanner_Color.png",
        orderId: 1,
    },
    {
        company: "ExtraHop",
        title: "Software Developer I - UI",
        summary:
            "Built and maintained an extensive web app as a member of the UI team",
        startMonth: "Dec",
        startYear: 2019,
        endMonth: "May",
        endYear: 2020,
        responsibilities: [
            "Developed new features with modern ESNext patterns in TypeScript and React in a Docker container",
            "Supported legacy features with Redux and AngularJS",
            "Experience in Agile Scrum environment with full development cycle from planning to release",
            "Embedded in fast-paced feature team with FE and BE engineers, QA, PM, and Tech Pubs",
        ],
        skillsUsed: ["TypeScript", "React", "SASS", "Linux", "Docker"],
        imgUrl:
            "https://security-img.scdn6.secure.raxcdn.com/news/612/extrahop-cloud-network-detection-920x533.png",
        orderId: 0,
    },
];

const SKILLS: SkillType[] = [
    {
        id: 27,
        name: "ES6 Javascript",
        imgUrl:
            "https://www.shareicon.net/data/512x512/2016/07/06/106573_software_512x512.png",
        orderId: 1,
    },
    {
        id: 24,
        name: "React.js",
        imgUrl:
            "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png",
        orderId: 0,
    },
    {
        id: 25,
        name: "React Native",
        imgUrl:
            "https://pluralsight2.imgix.net/paths/images/react-0f6558f88f.png",
        orderId: 3,
    },
    {
        id: 40,
        name: "Django",
        imgUrl:
            "https://cdn.iconscout.com/icon/free/png-256/django-2-282855.png",
        orderId: 5,
    },
    {
        id: 41,
        name: "SASS/CSS",
        imgUrl:
            "https://sass-lang.com/assets/img/styleguide/seal-black-1e36d095.png",
        orderId: 6,
    },
    {
        id: 39,
        name: "TypeScript",
        imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        orderId: 2,
    },
    {
        id: 26,
        name: "Ruby on Rails",
        imgUrl:
            "https://png-2.findicons.com/files/icons/1607/ruby_on_rails/512/ror_logo.png",
        orderId: 5,
    },
];

const GITHUBS: GithubType[] = [
    {
        repoUrlFront: "https://github.com/wardou2/album-report",
        name: "Album Report",
        imgUrl:
            "https://raw.githubusercontent.com/wardou2/album-report/master/public/images/Album-Report-Example.png",
        summary: "A website for tracking and taking notes on favorite albums.",
        contribution: [
            "Implemented Ruby on Rails API backend with endpoints for artists, notes, and albums.",
            "Developed a user interface using ES6 Javascript.",
            "Leveraged the Last.fm API to provide album search and information functionality.",
        ],
        orderId: 2,
    },
    {
        repoUrlFront: "https://github.com/wardou2/portfolio-react",
        repoUrlBack: "https://github.com/wardou2/portfolio-rails",
        demoUrl: "",
        name: "Portfolio (this site!)",
        imgUrl:
            "https://raw.githubusercontent.com/wardou2/portfolio-react/master/public/images/Portfolio-Example.png",
        summary: "A single-page portfolio website for programmers.",
        contribution: [
            "Implemented a user interface employing React and Semantic-React.",
            "Developed Ruby on Rails API backend to serve data.",
            "Utilized JSON Web Tokens and Local Storage to store encrypted user information client-side.",
            "Constructed edit-in-place functionality with React and Semantic-React.",
        ],
        orderId: 1,
    },
    {
        repoUrlFront: "https://github.com/wardou2/BeatquencherReact",
        repoUrlBack: "https://github.com/wardou2/BeatquencherRails",
        demoUrl: "https://beatquencher.herokuapp.com",
        name: "Beatquencher",
        imgUrl:
            "https://repository-images.githubusercontent.com/190749915/a0fc7980-9cc2-11e9-8078-3107bf13dfea",
        summary:
            "An online music sequencer with customizable instruments for quickly sketching musical ideas.",
        contribution: [
            "Utilized Tone JS package to implement synthesizers.",
            "Used React to create a responsive sequencer that updates instruments and notes in real time.",
            "Developed a Ruby on Rails API backend with endpoints for Users, Projects, Instruments, Scenes, and Tracks.",
            "Implemented login with Google OAuth and Cookies to authenticate users.",
        ],
        orderId: 0,
    },
];

const MUSIC = [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/871499902&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
];

const App = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

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
                    visible={sidebarVisible}
                    width="wide"
                >
                    <Menu.Item as="a" onClick={toggleSidebar}>
                        <Icon name="bars" size="mini" />
                        Close
                    </Menu.Item>
                    <NavLinks toggleSidebar={toggleSidebar} />
                </Sidebar>
            </Sticky>
            <Sidebar.Pusher dimmed={false}>
                <Segment basic className={USER.colorTheme}>
                    <Content
                        toggleSidebar={toggleSidebar}
                        jobs={JOBS}
                        githubs={GITHUBS}
                        skills={SKILLS}
                        music={MUSIC}
                        user={USER}
                    />
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default App;