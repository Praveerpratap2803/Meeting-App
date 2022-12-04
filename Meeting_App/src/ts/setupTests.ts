import 'whatwg-fetch';
import server from './mocks/server';

beforeAll( () => server.listen() );
afterEach( () => server.resetHandlers() );
// after the last test completes...
afterAll( () => server.close() );

