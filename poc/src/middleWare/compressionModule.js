import zlib from 'zlib';
import compression from 'compression';

export const bootstrapCompression = (application) => {
    const cp = compression({ 
        level: zlib.Z_BEST_COMPRESSION
    });
    application.use(cp);
};
