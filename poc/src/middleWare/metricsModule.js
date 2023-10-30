import morgan from 'morgan';
// import appmetrics from 'appmetrics-dash';
// import appmetricsPrometheus from 'appmetrics-prometheus';

export const bootstrapMetrics = (application) => {

    const m = morgan((tokens, req, res) => {
        return [
            '[', new Date(), '] ',
            tokens.method(req, res),
            tokens.url(req, res), ' : ',
            tokens['response-time'](req, res), 'ms'
        ].join('');
    });
    application.use(m);

    // appmetrics.attach({ 
    //     url: '/dashboard',
    //     title: 'gateway'
    // });
    // appmetricsPrometheus.attach();
};
