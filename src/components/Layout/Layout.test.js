import Layout from '../Layout';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router

describe('Layout', () => {
  it('renders correctly', () => {
    let view = renderer.create(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(view.toJSON()).toMatchSnapshot();
  });
});