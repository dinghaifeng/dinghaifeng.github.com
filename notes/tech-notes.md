---
layout: page
title: "Tech Notes"
description: ""
---
{% include JB/setup %}


#### git
* Books
    - [git tutorial](http://www.atlassian.com/git/)
    - [git book](http://git-scm.com/book/en/Getting-Started)
* Cheatsheets
    - [cheatsheet 1](https://na1.salesforce.com/help/doc/en/salesforce_git_developer_cheatsheet.pdf)
    - [cheatsheet 2](http://ndpsoftware.com/git-cheatsheet.html)

#### thrift
* [Thrift: The Missing Guide](http://diwakergupta.github.io/thrift-missing-guide/)
* [Thrift tutorial](http://jnb.ociweb.com/jnb/jnbJun2009.html)
* [Thrift wiki](http://wiki.apache.org/thrift/)
* [Thrift v.s. Protobuf](http://old.floatingsun.net/articles/thrift-vs-protocol-buffers/index.html)
* [Serializers benchmarks](https://github.com/eishay/jvm-serializers/wiki)
* Is there a built-in asynchronous client? 
    - Cassandra provides an AsyncClient impl.
    - [twisted deferred](http://twistedmatrix.com/documents/current/core/howto/defer.html)
    - [deferred better explained](http://tsunanet.net/~tsuna/async/api/com/stumbleupon/async/Deferred.html?is-external=true#warranty). See also [asynchbase](https://github.com/OpenTSDB/asynchbase), a great demonstration of using deferred.

#### python
* Style guide: [PEP-8](http://www.python.org/dev/peps/pep-0008/), [Google](http://google-styleguide.googlecode.com/svn/trunk/pyguide.html) 

#### jekyll
* Quick start

        $ rake post title="Hello World"
        $ rake page name="pages/about.md"

* [stack overflow markdown help](http://stackoverflow.com/editing-help)
* [Official markdown syntax](http://daringfireball.net/projects/markdown/syntax)
* Charting tools
    * Graphviz: [viz.js](https://github.com/mdaines/viz.js), [example](viz-js-examples.html)
    * TODO:: try compiling [mscgen](http://www.mcternan.me.uk/mscgen/) with [emscripten](https://github.com/kripken/emscripten)
    * Math Equations: [MathJax](http://www.mathjax.org/), [jsLatex](http://plugins.jquery.com/jsLaTeX/)
* Tips
    - [How to nest code within a list using Markdown](http://meta.stackoverflow.com/questions/3792/how-to-nest-code-within-a-list-using-markdown)

#### storage systems
* [comparisons](http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis)
* hbase
    * [Performance tuning](http://kenwublog.com/hbase-performance-tuning)
    * [Load balancer](http://zhihongyu.blogspot.com/2011/04/load-balancer-in-hbase-090.html), [HBASE-3679](https://issues.apache.org/jira/browse/HBASE-3679)
* memcached
    * [memcached wiki](https://code.google.com/p/memcached/wiki/NewStart)
    * [Clients List](https://code.google.com/p/memcached/wiki/Clients)
* mysql
    * [Database sharding](http://www.codefutures.com/database-sharding/)

#### HA
* [ucarp v.s. keepalived](http://blog.sina.com.cn/s/blog_5374d6e30100sh5n.html)

#### search
* Xapian
    * [Very comprehensive documents](http://xapian.org/docs/), [Overview](http://xapian.org/docs/overview.html), [An intro to IR](http://xapian.org/docs/intro_ir.html)

#### machine learning
* Basic mathematics revisited. [1](http://www.cogsci.ucsd.edu/~ajyu/Teaching/Cogs118A_wi09/Refs/basic_math.pdf), [2](http://courses.washington.edu/css490/2012.Winter/lecture_slides/02_math_essentials.pdf)
* Overview. [Programming Collective Intelligence](http://cuitianyi.com/blog/programming-collective-intelligence-%E8%AF%BB%E4%B9%A6%E6%80%BB%E7%BB%93/), [数学之美](http://book.douban.com/annotation/19461092/)
* List of Machine Learning Algorithms: [wikipedia](http://en.wikipedia.org/wiki/List_of_machine_learning_algorithms)
* svm

#### cluster management systems
* [cluster management systems](cluster-management-systems.html)
