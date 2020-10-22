#!/usr/bin/env bash

yarn  build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add git@github.com:YingHuaLiu/bookkeeping-website.git &&
git branch -m main &&
git push -u origin main -f &&
cd ..