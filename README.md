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

Upon a push/merge to `release` branch, the deployment will be triggered.
The automation script will build the react app using `yarn build` and upload artifacts to tgs server. 
The react app will be served by [tgs-backend](http://github.com/Troublor/tgs).

## License

This project is [MIT licensed](./LICENSE).
