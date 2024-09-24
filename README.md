## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Serving
```bash
node build
```

## Docker
Building and pushing the docker image
```bash
# Build
docker build -t brainstormerjr/portfolio-2.0:latest .

# Push
docker push brainstormerjr/portfolio-2.0:latest
```

## Serving via Docker Compose
```bash
# Pull repository from GitHub
git pull https://github.com/brainstormerjr/portfolio-2.0.git
cd portfolio-2.0
# Pull docker image for hosting
docker pull brainstormerjr/portfolio-2.0:latest
# Hosting user docker-compose
sudo docker-compose up -d
```