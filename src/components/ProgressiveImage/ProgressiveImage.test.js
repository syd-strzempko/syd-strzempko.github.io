import ProgressiveImage from '../ProgressiveImage';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router

const MOCKIMAGE = {
  pathLong: 'mock_long.jpg',
  pathShort: 'mock_short.jpg',
  id: 0,
  compressed: {
    pathLong: 'mock_long.jpg',
    pathShort: 'mock_short.jpg'
  }
}

describe('ProgressiveImage', () => {
  it('renders correctly', () => {
    let view = renderer.create(
      <MemoryRouter>
        <ProgressiveImage image={MOCKIMAGE} />
      </MemoryRouter>
    );
    expect(view.toJSON()).toMatchSnapshot();
  });
});