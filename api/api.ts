import { NowRequest, NowResponse } from '@now/node';
import caravaggio from 'caravaggio';
import { Config } from 'caravaggio/dist/config/default';

const ONE_DAY = 60 * 60 * 24;

const config: Config = {
  caches: {
    input: {
      type: 'memory',
      options: {
        limit: 100,
      }
    },
    output: {
      type: 'none',
      options: {}
    },
  },
  browserCache: `s-maxage=${ONE_DAY}`,
  whitelist: process.env.CARAVAGGIO_DOMAIN_WHITELIST 
    ? process.env.CARAVAGGIO_DOMAIN_WHITELIST.split(',').map(d => d.trim()) 
    : [],
  errors: 'html',
  logger: {
    options: {
      level: process.env.LOG_LEVEL || 'info',
      prettyPrint: true,
    },
    destination: process.stdout,
  },
}

export default async (req: NowRequest, res: NowResponse) => {
  const handler = caravaggio(config);
  // const { handler } = await createAPIServer();
  const result = await handler(req, res);
  return result;
};
