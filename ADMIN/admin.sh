#!/bin/bash
ls
pnpm install
npm install
npm run bulid
zip dist.zip dist 
rm dist.zip /www/wwwroot/blog-admin