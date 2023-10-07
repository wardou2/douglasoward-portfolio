import React from "react";
import { Grid, Icon } from "semantic-ui-react";

import { User } from "../Interfaces/User";

type Props = {
    user: User;
    text: string;
};

const SectionHeading = ({ user, text }: Props) => {
    return (
        <Grid columns={16}>
            <Grid.Row centered>
              
            </Grid.Row>

            <Grid.Row className={`${user.colorTheme}-heading`} width={16}>
                <Grid.Column width={1} />
                <Grid.Column width={11} verticalAlign="middle">
                    <span className="font-size-large font-heading">{text}</span>
                </Grid.Column>

                <Grid.Column width={4} verticalAlign="middle"></Grid.Column>
            </Grid.Row>
            <Grid.Row />
            <Grid.Row />
        </Grid>
    );
};

// const SectionHeadingOld = (props) => {

//   return (
//     <Grid columns={16}>
//       <Grid.Column width={16}>{' '}</Grid.Column>
//       <Grid.Column width={16} textAlign="center">
//           <Link to="/#nav"><Icon name="triangle up"/></Link>
//       </Grid.Column>

//       <Grid.Row className={`${props.user.color_theme}-heading`}>
//         <Grid.Column width={2} textAlign="center" verticalAlign="middle">
//           <Button.Group icon size='mini'>
//             {(props.sectionEdit && props.loggedIn && localStorage.getItem('jwt') !== '')
//               ? (<Button  compact onClick={props.startEdit}>
//                   <Button.Content>
//                     <Icon name="edit" />
//                   </Button.Content>
//                 </Button>)
//               : null}
//             {(props.sectionNew && props.loggedIn && localStorage.getItem('jwt') !== '')
//               ? (<Button compact onClick={props.startNew}>
//                   <Button.Content>
//                     <Icon name="add circle" />
//                   </Button.Content>
//                 </Button>)
//               : null}
//           </Button.Group>
//         </Grid.Column>

//         <Grid.Column width={14} verticalAlign="middle">
//           <div>
//             <Header size='large'>{props.text}</Header>
//           </div>
//         </Grid.Column>
//       </Grid.Row>

//       <Grid.Column width={16}>{' '}</Grid.Column>
//       <Grid.Column width={16}>{' '}</Grid.Column>

//     </Grid>
//     )
//   }

export default SectionHeading;
