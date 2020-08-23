import React from "react";
import { Grid } from "semantic-ui-react";
import { User } from "../Interfaces/User";

type Props = {
    user: User;
};

const NamePicIntro = ({ user }: Props) => {
    if (!user.intro) {
        return <span className="font-heading font-size-huge">Loading...</span>;
    }
    const words = user.intro.split(" ");

    return (
        <Grid stackable>
            <Grid.Column width={2} />
            <Grid.Column width={6} verticalAlign="middle">
                <span className="text">Hello, my name is</span>

                <br />
                <span className="font-heading font-size-huge">
                    {user.firstName} {user.lastName}
                </span>

                <br />
                <span className="font-heading font-size-medium">
                    {user.title}
                </span>

                <br />
                <br />
                <span className="text">
                    {words.map((word) => {
                        return word.includes("http://") ? (
                            <a
                                href={word}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {`${word.slice(7)} `}
                            </a>
                        ) : (
                            `${word} `
                        );
                    })}
                </span>
            </Grid.Column>
            <Grid.Column width={6} textAlign="center">
                <img
                    className="image-circle-portrait"
                    src={user.imgUrl}
                    alt="portrait"
                ></img>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
        </Grid>
    );
};

export default NamePicIntro;

// const NamePicIntroOLD = (props) => {
//    if (!props.user.intro){
//       return(
//          <span className="heading-font font-size-huge">Loading...</span>
//       )
//    } else {
//       let words = props.user.intro.split(" ")
//       return(
//          <Grid columns={16} stretched className="">
//             <Grid.Column width={2}></Grid.Column>
//             <Grid.Column width={6} textAlign="left" verticalAlign="middle">
//                <Grid.Row>
//                   <span>Hello, my name is <br /> <br /></span>
//                </Grid.Row>
//                <Grid.Row>
//                   <span className="heading-font font-size-huge">
//                      {props.user.first_name} {props.user.last_name} <br />
//                   </span>
//                </Grid.Row>
//                <Grid.Row>
//                <span className="emphasis">{props.user.title}</span>
//                </Grid.Row>
//                <Grid.Row>
//                <span>
//                   {words.map( word => {
//                       return word.includes('http://')
//                         ? <a href={word} target="_blank" rel="noopener noreferrer">{word.slice(7) + " "}</a>
//                         : word + " "
//                   })}
//                </span>
//                </Grid.Row>
//             </Grid.Column>

//             <Grid.Column width={6} textAlign="left">
//                <img className="image-circle-portrait"
//                   src={props.user.imgUrl} alt="portrait"></img>
//                <img className="image-circle-portrait-alt"
//                   src={'/images/CHEESIN_DRGN.jpg'} alt="DRGN"></img>
//             </Grid.Column>
//             <Grid.Column width={2}></Grid.Column>
//          </Grid>
//       )
//    }
// }
