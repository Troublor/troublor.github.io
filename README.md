# Troublor General Purpose Server - Frontend

This is the source code of my personal homepage.
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

### Preparation

```
yarn release [patch|minor|major]
```

This script will bump the version of the current branch, commit it, and bump it to the next pre-release version.

Upon a push/merge to `main` branch, the deployment will be triggered.
The automation script will build the react app using `yarn build` and upload artifacts to Cloudflare Pages.

### Pre-release

Any commit to `main` branch will trigger a GitHub Action to deploy a GitHub Pages, which serves as a pre-release.

### Release

Any pushed tag `vx.x.x` will trigger a GitHub Action to deploy the tagged commit to Cloudflare Pages, which is the production site.

## License

This project is [MIT licensed](./LICENSE).
