#!/usr/bin/env node

import { copyFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const sourceDir = join(rootDir, 'packages/ui/src/i18n/locales');
const targetDir = join(rootDir, 'demo-app/public/locales');

console.log('🌐 Syncing translation files...');

try {
  // Ensure target directory exists
  mkdirSync(targetDir, { recursive: true });

  // Copy all JSON files from source to target
  const files = readdirSync(sourceDir).filter(file => file.endsWith('.json'));
  
  files.forEach(file => {
    const sourcePath = join(sourceDir, file);
    const targetPath = join(targetDir, file);
    
    copyFileSync(sourcePath, targetPath);
    console.log(`  ✓ Copied ${file}`);
  });

  console.log(`✅ Successfully synced ${files.length} translation files`);
} catch (error) {
  console.error('❌ Error syncing translations:', error);
  process.exit(1);
}