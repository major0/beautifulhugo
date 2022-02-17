---
title: "Search Results"
sitemap:
  priority : 0.1
layout: "search"
---

Placeholder for site-local search. See: <https://gist.github.com/eddiewebb/735feb48f50f0ddd65ae5606a1cb41ae>

Setup
-----

Must configure [Hugo][] to putput JSON from the config.yaml.

Example:
```
outputs:
  home: [HTML, JSON]
```

Adding Searchable Fields
------------------------
To add searchable fields the following changes must be made.

1. Modify `layouts/_default/index.json` to include the new key.  E.g. `"foo" .Params.foo`
2. Modify `assets/js/search.js` to include new keys. E.g. `{ name: "foo", weight: 0.3 }`

_NOTE: The search function will not index pages still in draft._
