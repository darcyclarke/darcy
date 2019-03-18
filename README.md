# darcy

[![npm version](https://badge.fury.io/js/darcy.svg)](https://badge.fury.io/js/darcy) [![Build Status](https://travis-ci.org/darcyclarke/darcy.svg?branch=master)](https://travis-ci.org/darcyclarke/darcy) [![Known Vulnerabilities](https://snyk.io/test/github/darcyclarke/darcy/badge.svg)](https://snyk.io/test/github/darcyclarke/darcy) [![Greenkeeper badge](https://badges.greenkeeper.io/darcyclarke/darcy.svg)](https://greenkeeper.io/) 

![1500x500](https://user-images.githubusercontent.com/459713/54566715-0e9cc800-49a8-11e9-97d7-1dc2aab3ee68.jpg)

The data schema is based on [Open Graph Protocol](http://ogp.me/) metadata spec but slightly modified to add further context/expansion in the default, `:profile` & `:book` `type`s. Also, it adds a new `:link` `type`.

I may create some sort of **human** spec at some point to standardize this format for ease of use when sharing profile information with folks (ex. conference/meetup organizers, employers etc.). Let me know if you think that would be useful by :+1:*'ing* [this issue](https://github.com/darcyclarke/darcy/issues/73).

### Adding me to your project (or just get my info)

```bash
$ npm i darcy
# or
$ yarn add darcy
```

then...

```js
const darcy = require('darcy')
// or 
import darcy from 'darcy'
```
