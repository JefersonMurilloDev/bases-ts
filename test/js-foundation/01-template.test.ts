import { emailTemplate } from '../../src/js-foundation/01-template';


describe('js-foundation/01-template.ts', () => {

    test('email template should contain agreeting', () => {
        const template = emailTemplate;
        expect(template).toContain('Hi, {{name}}');
    });

    test('emailTemplate should contain {{name}} and {{orderId}}', () => {
        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderId}}');

        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);
    });
});