# NPM (Node Package Manager) Notes

## Introduction to NPM

- **Definition**: NPM stands for Node Package Manager, the default package manager for Node.js.
- **Purpose**: Helps manage dependencies (libraries, frameworks, etc.) for Node.js projects.
- **Repository**: Accesses a vast online registry (https://www.npmjs.com/) with thousands of open-source packages.

## Key NPM Commands

1. **Initialize a New Project**

   - `npm init`: Starts a new Node.js project and creates a `package.json` file.
   - `npm init -y`: Automatically creates a `package.json` file with default settings.

2. **Install Packages**

   - `npm install <package>`: Installs a package locally and adds it to `dependencies` in `package.json`.
   - `npm install <package> --save-dev`: Installs a package as a development dependency (e.g., testing tools, linters).
   - `npm install <package>@<version>`: Installs a specific version of a package.
   - `npm install -g <package>`: Installs a package globally (accessible across all projects).

3. **Uninstall Packages**

   - `npm uninstall <package>`: Removes a package from the project and updates `package.json`.
   - `npm uninstall -g <package>`: Removes a globally installed package.

4. **Update Packages**

   - `npm update <package>`: Updates a package to the latest version based on version constraints in `package.json`.
   - `npm outdated`: Lists packages with newer versions available.

5. **Listing Installed Packages**

   - `npm list`: Lists all installed packages and their dependencies.
   - `npm list -g --depth=0`: Lists all globally installed packages.

6. **Run Scripts**
   - Define scripts in `package.json` (e.g., start, test, build).
   - `npm run <script-name>`: Runs a custom script defined in `package.json`.

## package.json File

- **Definition**: A metadata file located in the project root that lists the project's dependencies, scripts, and other configurations.
- **Key Fields**:
  - `name`: Name of the project.
  - `version`: Current version of the project.
  - `scripts`: Custom commands to automate tasks (e.g., `"start": "node app.js"`).
  - `dependencies`: Lists runtime dependencies.
  - `devDependencies`: Lists development dependencies.

## Semantic Versioning in NPM

- NPM follows **semantic versioning** (SemVer) for package versions: `MAJOR.MINOR.PATCH`.

  - **MAJOR**: Breaking changes.
  - **MINOR**: Backward-compatible new features.
  - **PATCH**: Backward-compatible bug fixes.

- **Symbols in package.json**:
  - `^1.2.3`: Accepts updates that do not change the major version (e.g., 1.3.0, 1.4.2).
  - `~1.2.3`: Accepts updates that do not change the minor version (e.g., 1.2.4, 1.2.9).

## Managing Project Dependencies

- **Local Packages**: Installed in the `node_modules` directory within the project.
- **Global Packages**: Installed globally and accessible from anywhere.
- **package-lock.json**: Tracks exact versions of each dependency, ensuring consistent installs across environments.

## NPM Scripts

- Allows automation of commands in `package.json`.
- Example:
  ```json
  "scripts": {
    "start": "node index.js",
    "test": "mocha"
  }
  ```
- Run scripts using npm run <script-name>.

## Popular NPM Packages

- Express: Fast, minimalist web framework for Node.js.
  Lodash: Utility library for working with arrays, numbers, objects, and strings.
- Moment: Library for parsing, validating, manipulating, and formatting dates.
- Axios: Promise-based HTTP client for making network requests.

## Useful NPM Flags

- --save-exact: Installs a specific version and prevents updates.
- --dry-run: Shows what would happen without making changes.
- --force: Forces actions, even if conflicts exist.

## Common Issues and Solutions

- Permission Errors: Use sudo (Linux/macOS) or run in admin mode (Windows) for global installs.
- Version Conflicts: Update packages carefully to avoid breaking dependencies.
  Clearing Cache: Run npm cache clean --force if installation issues occur.
