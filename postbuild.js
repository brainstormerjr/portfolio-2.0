// POST BUILD TASKS
// build/server/chunks/6-*.js files need an additional import at the top of the file to support require() syntax.

import fs from 'fs';
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Directory where the chunk files are located
const chunksDir = path.join(__dirname, 'build', 'server', 'chunks');

// Regular expression to match the file name pattern
const filePattern = /^6-.*\.js$/;

// Find the file that matches the pattern
const files = fs.readdirSync(chunksDir);
const targetFile = files.find(file => filePattern.test(file));

if (!targetFile) {
    console.error('No matching file found. Looking for build/server/chunks/6-*.js files.');
    process.exit(1);
}

const filePath = path.join(chunksDir, targetFile);

// Read the file content
let fileContent = fs.readFileSync(filePath, 'utf8');

// Add the required imports at the top of the file
const importStatement = `
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
`;

fileContent = importStatement + fileContent;

// Write the modified content back to the file
fs.writeFileSync(filePath, fileContent, 'utf8');

console.log(`Updated ${filePath} with required imports.`);