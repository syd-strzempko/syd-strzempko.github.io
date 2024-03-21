import { WorkSingle } from './WorkSingle';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import * as Redux from 'react-redux';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
}));

const MOCKSINGLE = {
    url: 'test',
    org: 'testorg',
    project: '',
    title: 'test',
    link: '/test',
    span: 'test',
    details: [
        'lorem ipsum etc',
        'lorem ipsum esque'
    ]
};

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router

describe('WorkSingle', () => {
    beforeEach(() => {
        jest.spyOn(Redux, 'useSelector').mockReturnValue(MOCKSINGLE);
    });
    it('renders correctly', () => {
        let view = renderer.create(
            <MemoryRouter>
            <WorkSingle />
            </MemoryRouter>
        );
        expect(view.toJSON()).toMatchSnapshot();
    });
});