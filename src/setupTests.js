// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));
  
// Mock useSelector hooks - redux-mock-store
jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));