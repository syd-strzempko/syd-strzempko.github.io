import Carousel from '../Carousel';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router

describe('Carousel', () => {
  it('renders correctly', () => {
    let view = renderer.create(
      <MemoryRouter>
        <Carousel />
      </MemoryRouter>
    );
    expect(view.toJSON()).toMatchSnapshot();
  });
});