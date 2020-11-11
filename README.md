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
