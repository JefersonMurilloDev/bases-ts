import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin.ts', () => {

    test('httpClientPlugin.get() should return a string', async () => {

        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/posts/1');

        
        expect(data).toBeDefined();
        expect(data.id).toBe(1);
        expect(data.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        expect(data.body).toBe('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');

    });

    test('httpClientPlugin should have a post, delete and put methods', () => {
        expect( typeof  httpClientPlugin.post).toBe('function');
        expect( typeof httpClientPlugin.delete).toBe('function');
        expect( typeof httpClientPlugin.put).toBe('function');
    });
});