import { render } from "@testing-library/react";
import Preloader from "./Preloader";

test('Preloader styles', () => {
    expect(render(<Preloader />)).toMatchSnapshot()
})