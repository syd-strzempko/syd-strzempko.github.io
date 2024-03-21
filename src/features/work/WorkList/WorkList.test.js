import { WorkList } from './WorkList';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import * as Redux from 'react-redux';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
}));

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router

describe('WorkList', () => {
    beforeEach(() => {
        jest.spyOn(Redux, 'useSelector').mockReturnValue([]);
    });
    it('renders correctly', () => {
        let view = renderer.create(
        <MemoryRouter>
            <WorkList />
        </MemoryRouter>
        );
        expect(view.toJSON()).toMatchSnapshot();
    });
});