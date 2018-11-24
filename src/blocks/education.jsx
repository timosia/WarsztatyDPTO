import React from 'react';
import { List, Header } from 'semantic-ui-react';


const Education = ({children, items_edu, edu_header}) => (
    
    <List celled>
    {  
        items_edu.map((item,index)=>(
        <List.Item>
        {item.title}
        {item.description}
        {item.from}
        {item.to}
        </List.Item>
     ))
    }
    <Header as='h1'>{edu_header}</Header>
    </List>
)

export default Education;