import { ArtSingle } from './ArtSingle';
import { MemoryRouter, useParams } from 'react-router-dom';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { mockStore } from '../artSlice.test';

jest.mock('../../../components/Circles/Circles');

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router
describe('ArtSingle', () => {
    // Mock useSelectors
    beforeEach(() => { useSelectorMock.mockImplementation(selector => selector(mockStore)); });
    afterEach(() => { useSelectorMock.mockClear(); });

    const useSelectorMock = reactRedux.useSelector;

    // Unit tests
    test('renders correctly', () => {
        useParams.mockReturnValue({ id: '0' });
        let view = renderer.create(
            <MemoryRouter>
                <ArtSingle />
            </MemoryRouter>
        ).toJSON();
        expect(view).toMatchSnapshot();
    });
});