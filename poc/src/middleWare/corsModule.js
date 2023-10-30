import cors from 'cors';

export const bootstrapCors = (application) => {
    const c = cors();
    application.use(c);
};
