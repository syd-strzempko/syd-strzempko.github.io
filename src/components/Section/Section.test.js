import Section from '../Section';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

// Note: MemoryRouter allows for nested Link components to exist inside of & access stack of mocked router

describe('Section', () => {
  it('renders correctly', () => {
    let view = renderer.create(
      <MemoryRouter>
        <Section />
      </MemoryRouter>
    );
    expect(view.toJSON()).toMatchSnapshot();
  });
});