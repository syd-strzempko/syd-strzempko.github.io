import { selectArt } from './artSlice';

export const mockStore = {
    art: [
        {  
            pathLong: 'mock_long.jpg',
            pathShort: 'mock_short.jpg',
            id: 0,
            compressed: {
                pathLong: 'mock_long.jpg',
                pathShort: 'mock_short.jpg'
            }
        },
        {  
            pathLong: 'mock_long.jpg',
            pathShort: 'mock_short.jpg',
            id: 1,
            compressed: {
                pathLong: 'mock_long.jpg',
                pathShort: 'mock_short.jpg'
            }
        }
    ]
};

describe('artSlice Selectors', () => {
    // Single selector
    test('selectSingleComplete', async () => {
        expect(selectArt(mockStore, '0')).toEqual(mockStore.art[0]);
        expect(selectArt(mockStore, '1')).toEqual(mockStore.art[1]);
    });
});