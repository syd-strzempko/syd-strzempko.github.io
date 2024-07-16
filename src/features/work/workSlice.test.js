import { selectWorkComplete, selectSingleComplete } from './workSlice';

export const mockStore = {
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
            },
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
                pathLong: '/job_test/mock_long.jpg',
                pathShort: '/job_test/mock_short.jpg',
                id: 0,
                compressed: {
                    pathLong: 'mock_long.jpg',
                    pathShort: 'mock_short.jpg'
                }
            },
            {  
                pathLong: '/project_test/mock_long.jpg',
                pathShort: '/project_test/mock_short.jpg',
                id: 1,
                compressed: {
                    pathLong: 'mock_long.jpg',
                    pathShort: 'mock_short.jpg'
                }
            }
        ],
    }
};

const expectedOutput = [
    {
        url: 'job_test',
        org: 'test',
        project: 'test',
        title: 'test',
        link: '/test',
        span: 'test',
        details: ['lorem ipsum etc', 'lorem ipsum esque'],
        images: [{  
            pathLong: '/job_test/mock_long.jpg',
            pathShort: '/job_test/mock_short.jpg',
            id: 0,
            compressed: {
                pathLong: 'mock_long.jpg',
                pathShort: 'mock_short.jpg'
            }
        }]
    },
    {
        url: 'project_test',
        org: 'test',
        project: 'test',
        title: 'test',
        link: '/test',
        span: 'test',
        details: ['lorem ipsum etc', 'lorem ipsum esque'],
        images: [{  
            pathLong: '/project_test/mock_long.jpg',
            pathShort: '/project_test/mock_short.jpg',
            id: 1,
            compressed: {
                pathLong: 'mock_long.jpg',
                pathShort: 'mock_short.jpg'
            }
        }]
    }
];

describe('workSlice Selectors', () => {
    // List selector
    test('selectWorkComplete', async () => {
        expect(selectWorkComplete(mockStore)).toEqual(expectedOutput);
    });
    // Single selector
    test('selectSingleComplete', async () => {
        expect(selectSingleComplete(mockStore, 'job_test')).toEqual(expectedOutput[0]);
        expect(selectSingleComplete(mockStore, 'project_test')).toEqual(expectedOutput[1]);
    });
});