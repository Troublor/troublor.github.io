# Troublor General Purpose Server - Frontend

This is the frontend of the [Troublor General Purpose Server](https://troublor.xyz) (tgs).
It is developed with [Create React App](https://create-react-app.dev/).

## Requirements

- node.js: `16.x`
- yarn

## Development

Install dependencies:

```bash
yarn
```

Start development server (with hot reload):

```bash
yarn start
```

## Deployment

The deployment is automated using [GitHub Action](.github/workflows/deploy.yml).

```
yarn version [patch|minor|major]
```

Upon a push/merge to `main` branch, the deployment will be triggered.
The automation script will build the react app using `yarn build` and upload artifacts to Cloudflare Pages.

## License

This project is [MIT licensed](./LICENSE).
