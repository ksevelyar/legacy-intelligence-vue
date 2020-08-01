---
title: CI for Vue via GitHub Actions
tags:
  - webpack
  - nixos
  - js
---

# CI for Vue via GitHub Actions

I love simplicity of [GitHub Actions](https://github.com/features/actions), you just need to push one file to your repo

## `.github/workflows/build.yml`

```yml
name: CI
on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install and Build
        run: |
          npm install
          npm run-script build
```

And badge to the readme.md:


```
[![CI](https://github.com/ksevelyar/legacy-intelligence-vue/workflows/CI/badge.svg)](https://github.com/ksevelyar/legacy-intelligence-vue/actions)
```

Result:

[![CI](https://github.com/ksevelyar/legacy-intelligence-vue/workflows/CI/badge.svg)](https://github.com/ksevelyar/legacy-intelligence-vue/actions)
