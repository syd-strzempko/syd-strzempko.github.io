import { WorkList } from './WorkList';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { mockStore } from '../workSlice.test';

jest.mock('../../../components/Circles/Circles');

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router
describe('WorkList', () => {
    // Mock useSelectors
    beforeEach(() => { useSelectorMock.mockImplementation(selector => selector(mockStore)); });
    afterEach(() => { useSelectorMock.mockClear(); });

    const useSelectorMock = reactRedux.useSelector;

    // Unit tests
    test('renders correctly', () => {
        let view = renderer.create(
            <MemoryRouter>
                <WorkList />
            </MemoryRouter>
        ).toJSON();
        expect(view).toMatchSnapshot();
    });
});