import React from 'react';
import { List, Header } from 'semantic-ui-react';

const Menu = ({children, urodzenie, adres, telefon, mail, naglowek}) => (

    <List >
        <Header as='h1'>{naglowek}</Header>
        <List.Item>
            <List.Icon name='calendar' />
            <List.Content>{urodzenie}</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='marker' />
            <List.Content>{adres}</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='calendar' />
            <List.Content>{telefon}</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='mail' />
            <List.Content>{mail}</List.Content>
        </List.Item>


   
    </List>
)
export default Menu;