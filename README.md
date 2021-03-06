# node-starter-kit

[![Build Status](https://travis-ci.org/Recmo/node-starter-kit.svg)](https://travis-ci.org/Recmo/node-starter-kit)  [![codecov](https://codecov.io/gh/Recmo/node-starter-kit/branch/master/graph/badge.svg)](https://codecov.io/gh/Recmo/node-starter-kit) [![Join the chat at https://gitter.im/Recmo/node-starter-kit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Recmo/node-starter-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Starter kit for Node + React + Redux applications.


## Getting started

### Setting up your development environment

I recommend and Ubuntu machine with Chrome and Atom. You can use whatever you want.

Install [Chrome][chrome] and the extensions [React Developer Tools][react-ext] and [Redux DecTools][redux-ext].

[chrome]: https://www.google.com/chrome/browser/features.html?brand=CHBD&gclid=CO2x8Ibw5NMCFYoQ0wodulgAlQ&dclid=CO7Tmofw5NMCFUakUQodVc8BvA
[react-ext]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
[redux-ext]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

Install [Atom][atom] and run the command bellow to install a bunch of packages. Afterwards, configure the eslint plugin to ‘fix on save’.

```
apm install editorconfig file-icons language-diff language-ini language-markdown linter linter-eslint linter-solidity linter-write-good minimap minimap-git-diff minimap-highlight-selected
```

[atom]: https://atom.io/

### Getting up and running

Open the project folder in Atom. Then in a terminal, download all the dependencies:

```
yarn
```

Now open three terminals:

A: `yarn serve`
B: `yarn test-watch`
C: (use for issuing random commands like `git`)

Open Chrome and go to [https://localhost:8080/](https://localhost:8080/).
