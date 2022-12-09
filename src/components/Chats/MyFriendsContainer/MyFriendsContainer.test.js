import {  selectorFriends } from './MyFriendsContainer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MyFriends from './MyFriends/MyFriends';
import { darkTheme } from '../../../theme/theme';

const friends = [
    {id: 1, name: 'Anna', src: 'https://vibir.ru/wp-content/uploads/2019/10/tematicheskie-avatarki.jpg'},
    {id: 2, name: 'Valeria', src: 'https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg'},
    {id: 3, name: 'Nikita', src: 'https://vraki.net/sites/default/files/mood/avatarka.jpg'},
]

describe('redux selectors', () => {
    test('get list from state', () => {
        const myFriend = [
            { id: 1, name: 'Bars'},
            { id: 2, name: 'Alex'}
        ];
        const result = selectorFriends({chats: myFriend});
        expect(result).toEqual(myFriend)
    });
    test('get new friend from state', () => {
        const myNewFriend = { id: 1, name: 'Bars' };
        const result = selectorFriends({chats: myNewFriend});
        expect(result).toEqual(myNewFriend)
    });
    test('Friends async', async() => {
        render(<MyFriends theme={darkTheme} dialogs={friends}/>, { wrapper: MemoryRouter});
        let friend = await screen.findByText(/Anna/i);
        expect(friend).toBeInTheDocument();
    });
})