import { WorkSingle } from './WorkSingle';
import { MemoryRouter, useParams } from 'react-router-dom';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { mockStore } from '../workSlice.test';

jest.mock('../../../components/Circles/Circles');

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router
describe('WorkSingle', () => {
    // Mock useSelectors
    beforeEach(() => { useSelectorMock.mockImplementation(selector => selector(mockStore)); });
    afterEach(() => { useSelectorMock.mockClear(); });

    const useSelectorMock = reactRedux.useSelector;

    // Unit tests
    test('renders correctly with job', () => {
        useParams.mockReturnValue({ id: 'job_test' });
        let view = renderer.create(
            <MemoryRouter>
                <WorkSingle />
            </MemoryRouter>
        ).toJSON();
        expect(view).toMatchSnapshot();
    });
    test('renders correctly with project', () => {
        useParams.mockReturnValue({ id: 'project_test' });
        let view = renderer.create(
            <MemoryRouter>
                <WorkSingle />
            </MemoryRouter>
        ).toJSON();
        expect(view).toMatchSnapshot();
    });
});