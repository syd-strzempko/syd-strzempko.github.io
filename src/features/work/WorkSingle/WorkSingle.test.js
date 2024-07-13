import { WorkSingle } from './WorkSingle';
import { MemoryRouter, useParams } from 'react-router-dom';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
// import { render, screen } from '@testing-library/react';

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

// Mock useSelector hooks - redux-mock-store
jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));

jest.mock('../../../components/Circles/Circles');

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router
describe('WorkSingle', () => {
    beforeEach(() => {
        useSelectorMock.mockImplementation(selector => selector(mockStore));
    })
    afterEach(() => {
        useSelectorMock.mockClear();
    })

    const useSelectorMock = reactRedux.useSelector;
    const mockStore = {
        work: {
            jobs: [
                {
                    url: 'job_test',
                    org: 'test',
                    project: 'test',
                    title: 'test',
                    link: '/test',
                    span: 'test',
                    details: ['lorem ipsum etc', 'lorem ipsum esque']
                }
            ],
            projects: [
                {
                    url: 'project_test',
                    org: 'test',
                    project: 'test',
                    title: 'test',
                    link: '/test',
                    span: 'test',
                    details: ['lorem ipsum etc', 'lorem ipsum esque']
                }
            ],
            images: [
                {  
                    pathLong: 'mock_long.jpg',
                    pathShort: '/job_test/mock_short.jpg',
                    id: 0,
                    compressed: {
                        pathLong: 'mock_long.jpg',
                        pathShort: 'mock_short.jpg'
                    }
                },
                {  
                    pathLong: 'mock_long.jpg',
                    pathShort: '/project_test/mock_short.jpg',
                    id: 0,
                    compressed: {
                        pathLong: 'mock_long.jpg',
                        pathShort: 'mock_short.jpg'
                    }
                }
            ],
        }
    };

    test('renders correctly with job', () => {
        // Set the desired dynamic value for testing
        // useParams.mockReturnValue({ id: 'job_test' });
        jest.spyOn(require('react-router-dom'), 'useParams').mockReturnValue({ id: 'job_test' });

        let view = renderer.create(
            <MemoryRouter>
                <WorkSingle />
            </MemoryRouter>
        );
        expect(view.toJSON()).toMatchSnapshot();
    });
    test('renders correctly with project', () => {
        // Set the desired dynamic value for testing
        // useParams.mockReturnValue({ id: 'project_test' });
        jest.spyOn(require('react-router-dom'), 'useParams').mockReturnValue({ id: 'project_test' });

        let view = renderer.create(
            <MemoryRouter>
                <WorkSingle />
            </MemoryRouter>
        );
        expect(view.toJSON()).toMatchSnapshot();
    });
});