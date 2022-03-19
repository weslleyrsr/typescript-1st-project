# typescript-1st-project

This project was based on Alura TypeScript 1st module, the base branch is `arquivos-iniciais` and at the end of the course I developed the structure at `typescript` branch.

## Deploy steps
### Install dependencies
Run `npm i` on the root directory

### Compile and serve the app (with watcher enabled)
Run `npm run start` so concurrently will run both the `lite-server --baseDir=dist` watching the ES6 compiled files on your dist folder and `tsc -w` to compile and watch your typescript files

### Compile TS then serve
In order to compile the TS files to ES6 JavaScript you shoud run `npm run compile`, then to serve the app through lite-server `npm run server`
