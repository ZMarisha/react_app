import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import MyFriends from "./MyFriends";
import {darkTheme} from '../../../../theme/theme';
import { MemoryRouter } from 'react-router-dom';
import { Button } from "@mui/material";


const friends = [
    {id: 1, name: 'Anna', src: 'https://vibir.ru/wp-content/uploads/2019/10/tematicheskie-avatarki.jpg'},
    {id: 2, name: 'Valeria', src: 'https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg'},
    {id: 3, name: 'Nikita', src: 'https://vraki.net/sites/default/files/mood/avatarka.jpg'},
]

describe('MyFriends component', () => {
    test('check text in the component', () => {
        render(<MyFriends theme={darkTheme} dialogs={friends}/>, { wrapper: MemoryRouter});
        const view = screen.getByText('My friends')
        expect(view).toBeTruthy();
    });
    test('button testing', () => {
        let handleClick = jest.fn();
        render(<Button onClick={handleClick}/>);
        const button = screen.getByRole('button');
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalled();
    });
})