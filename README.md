# archadon.com website

```bash
yarn install
```

```bash
yarn dev:start
```

## Deploying to Dev Environment

```bash
yarn dev:predeploy:build
```
After this step you will need to commit for elastic beanstalk. After committing run:
```bash
  yarn dev:deploy
```

## Deploy to prod

```bash
yarn prod:build
```
After this step you will need to commit for elastic beanstalk. After committing run:
```bash
  yarn prod:deploy
```
