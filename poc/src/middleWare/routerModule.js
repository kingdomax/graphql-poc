export const bootstrapRouters = (application) => {
    application.get('/', (req, res) => res.send('Hello world'));
};