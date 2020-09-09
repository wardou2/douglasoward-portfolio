import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import {
    Icon,
    Menu,
    Segment,
    Sidebar,
    Sticky,
    Button,
} from "semantic-ui-react";
import Content from "./components/Content";
import NavLinks from "./components/NavLinks";
import { User } from "./Interfaces/User";
import { JobType } from "./Interfaces/Job";
import { SkillType } from "./Interfaces/Skill";
import { GithubType } from "./Interfaces/Github";
import RENDERER from "./three/main";

const USER: User = {
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
        imgUrl: "/images/jobs/electroimpact-logo.png",
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
        imgUrl: "/images/jobs/extrahop-logo.png",
        orderId: 0,
    },
];

const SKILLS: SkillType[] = [
    {
        name: "ES6 Javascript",
        imgUrl: "/images/skills/JS-logo.png",
        orderId: 1,
    },
    {
        name: "React.js",
        imgUrl: "/images/skills/React-logo.png",
        orderId: 0,
    },
    {
        name: "React Native",
        imgUrl: "/images/skills/ReactNative-logo.png",
        orderId: 3,
    },
    {
        name: "Django",
        imgUrl: "/images/skills/Django-logo.png",
        orderId: 5,
    },
    {
        name: "SASS/CSS",
        imgUrl: "/images/skills/Sass-logo.png",
        orderId: 6,
    },
    {
        name: "TypeScript",
        imgUrl: "/images/skills/TS-logo.png",
        orderId: 2,
    },
    {
        name: "Ruby on Rails",
        imgUrl: "/images/skills/RubyOnRails-logo.png",
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
    const [renderer, setRenderer] = useState<RENDERER | null>(null);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const threeRef = useRef(null);
    useEffect(() => {
        const render = new RENDERER(threeRef);
        setRenderer(render);
    }, [threeRef]);

    const toggleThree = () => {
        if (renderer) {
            renderer.stop();
        }
    };

    return (
        <>
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
                    {/* TODO: Move to better place */}
                    <Button onClick={toggleThree}>Disable Animation</Button>
                    <NavLinks toggleSidebar={toggleSidebar} />
                </Sidebar>
            </Sticky>
            <Sidebar.Pushable className="fix-sidebar">
                <Sidebar.Pusher dimmed={false}>
                    <Segment basic className={USER.colorTheme}>
                        <div id="canvas-div" ref={threeRef}></div>

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
        </>
    );
};

export default App;
