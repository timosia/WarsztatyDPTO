import React from 'react';
import { List, Header, Grid } from 'semantic-ui-react';


const Experience = ({children, items_exp, exp_header}) => (
    // <Header as='h1'>{exp_header}</Header>

    <div>
    <Header as='h1'>{exp_header}</Header>
    <Grid columns={4} >
        {
            items_exp.map((item,index)=>(

            <Grid.Row>

            <Grid.Column>
            {item.title}
            </Grid.Column>
            <Grid.Column>
            {item.description}
            </Grid.Column>
            <Grid.Column>
            {item.from}
            </Grid.Column>
            <Grid.Column>
            {item.to}
            </Grid.Column>

            </Grid.Row>
        ))
        }
         </Grid>
    </div>
)

export default Experience;