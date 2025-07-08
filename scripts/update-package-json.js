const fs = require('fs');
const path = require('path');

// Path to package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');

// Read the current package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add the sitemap generation script if it doesn't exist
if (!packageJson.scripts.sitemap) {
  packageJson.scripts.sitemap = 'node scripts/generate-sitemap.js';
}

// Add a build:sitemap script that runs the sitemap generation before the build
if (!packageJson.scripts['build:sitemap']) {
  packageJson.scripts['build:sitemap'] = 'npm run sitemap && npm run build';
}

// Add glob as a dev dependency if it doesn't exist
if (!packageJson.devDependencies) {
  packageJson.devDependencies = {};
}

if (!packageJson.devDependencies.glob) {
  packageJson.devDependencies.glob = '^10.3.10';
}

// Write the updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Package.json updated with sitemap scripts!');