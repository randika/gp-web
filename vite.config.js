import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Determine repo name in CI for GitHub Pages base path
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const isUserOrOrgSite = /\.github\.io$/i.test(repo);
const base = isUserOrOrgSite ? '/' : (repo ? `/${repo}/` : '/');

export default defineConfig({
  base,
  plugins: [react()]
});