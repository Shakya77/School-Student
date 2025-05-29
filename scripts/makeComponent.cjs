#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2];

if (!inputPath) {
  console.error('❌ Please provide a component path like src/views/HomePage');
  process.exit(1);
}

// Extract component name from the last part of the path
const parts = inputPath.split(/[\\/]/);
const componentName = parts[parts.length - 1];

// Absolute directory path based on user input
const dir = path.join(__dirname, '..', 'src', ...parts);

// Stop if folder already exists
if (fs.existsSync(dir)) {
  console.error('❌ Component already exists.');
  process.exit(1);
}

// Create nested folders
fs.mkdirSync(dir, { recursive: true });

// Component template
const component = `
import React from 'react';

export default function ${componentName}() {
  return (
    <div>
      <h1>${componentName} Component</h1>
    </div>
  );
}
`.trim();

// Write file: e.g. src/views/HomePage/HomePage.jsx
fs.writeFileSync(path.join(dir, `${componentName}.jsx`), component);

// ✅ Clean log message
console.log(`✅ ${componentName} created at src/${inputPath}/${componentName}.jsx`);
