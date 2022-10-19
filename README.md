## Vercel Now

In order to deploy caravaggio to Vercel, just run, being in this folder,

```
npm install -g now
npm install
now
```

The name maybe changed to `vercel` due to re-branding. In that case run

```
npm i -g vercel
npm install
vercel
```

## Updating configuration

The configuration si meant to be run on vercel platform and so some things already works like cache
settings or error and logs.    
If you wnt to change some parameter, edit file `api/api.ts`.
