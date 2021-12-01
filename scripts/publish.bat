@echo off
color 0D
vite build
color 0A
yarn version --patch
color 0B
yarn publish --registry http://registry.npmjs.org --access public



