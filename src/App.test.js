import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';


console.log('-----------testing-------')

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.json(
      [
        { id: 1, title: 'Title1' },
        { id: 2, title: 'Title2' },
        { id: 3, title: 'Title3' }
      ]
    ))
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
afterEach(() => {
  server.resetHandlers();
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Title1/i);
  expect(linkElement).toBeInTheDocument();
});
