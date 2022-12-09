import { screen, render } from "@testing-library/react";
import Home from './Home';

describe('Home component', () => {
    test('Home render default value', () => {
        render(<Home />);
        const view = screen.getByText(/Home/i)
        expect(view).toBeInTheDocument();
        //expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
    });

})