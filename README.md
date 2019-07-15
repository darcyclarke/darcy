<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css">
<style>
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
<article class="markdown-body">

# 👤 darcy

[![npm version](https://badge.fury.io/js/darcy.svg)](https://badge.fury.io/js/darcy) [![Build Status](https://travis-ci.org/darcyclarke/darcy.svg?branch=master)](https://travis-ci.org/darcyclarke/darcy) [![Known Vulnerabilities](https://snyk.io/test/github/darcyclarke/darcy/badge.svg)](https://snyk.io/test/github/darcyclarke/darcy) [![Greenkeeper badge](https://badges.greenkeeper.io/darcyclarke/darcy.svg)](https://greenkeeper.io/) [![Netlify Status](https://api.netlify.com/api/v1/badges/e2e9f0d7-1859-45fc-a025-95941ad1843b/deploy-status)](https://app.netlify.com/sites/api-services/deploys)

![Darcy's Banner](https://user-images.githubusercontent.com/459713/54567108-245ebd00-49a9-11e9-9ff7-8c24895a4350.jpg)

The data schema is based on [Open Graph Protocol](http://ogp.me/) metadata spec but slightly modified to add further context/expansion in the default, `:profile` & `:book` `type`s. Also, it adds a new `:link` `type`.

#### Add me to your deps

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

#### API Requests

You can query my data directly from: `https://darcy.netlify.com/.netlify/functions/get` (ie. *DaaS: Darcy as a Service*)

**Examples:**

```bash
curl -v https://darcy.netlify.com/.netlify/functions/get
```

```js
fetch('https://darcy.netlify.com/.netlify/functions/get')
  .then(res => res.json())
  .then(json => console.log(json)) // me...
```
</article>
