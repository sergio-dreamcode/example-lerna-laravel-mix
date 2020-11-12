Notes
===


- First initialize the Lerna project
    ```
    lerna init
    ```
- Rename `packages` directory to `apps` and in the `lerna.json` file add the `npmClient: true` and `useWorkspaces: true` properties and make sure the `packages` orperties now uses the new `apps` directory
    ```
    {
        "packages": [
            "apps/*"
        ],
        "version": "0.0.0",
        "npmClient": "yarn",
        "useWorkspaces": true
    }
    ```
- To the root `package.json` add scripts to bootstrap, watch and build using `lerna run <command> --parallel`. This will read the package.json files under `apps/` and execute the ones that also have that same command.
- Add the `workspaces` properties using `apps/*` as value
- Create new components library using tsdx
    ```
    cd apps
    tsdx create coolcomponents
    ```
    Make sure to select react + storybook option on tsdx
- Change the library name in `coolcomponents/package.json` from `coolcomponents` to `@omedym/coolcomponents`. Also make sure to rename the `start` script to `watch`
- Create a Laravel application using `composer create-project --prefer-dist laravel/laravel backend` and make sure the `package.json` has a version (preferably the same as apps/coolcomponents) and the `private: true` property.
- In the `package.json` for backend project make sure that the `watch` script uses yarn instead of npm `"watch": "yarn run development --watch"`
- Because all dependencies will be installed in the `apps` directory it is important for the case of laravel to use two upper directories for development mode: `../../node_modules`
- Install the react and react-dom and change the webpack.mix.js settings to use the `react` function instead.
- Add `"@omedym/coolcomponents": "^0.1.0"` as a dependency in backend `package.json` using text and not with yarn in case the library was not previously pubished in some registry.
- In the `welcome.blade.php` add a div where the react application can be loaded
- Go to the root folder and run:
    ```
    yarn # To update depedencies between projects
    yarn bootstrap
    yarn watch
    ```
- Now with this changes it will be possible to reflect in the Laravel application all the changes made in the components library
