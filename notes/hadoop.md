---
layout: page
title: "Hadoop"
description: ""
---
{% include JB/setup %}

#### Hadoop
* MapReduce
    - [Introduction](http://ofps.oreilly.com/titles/9781449302641/hadoop_overview.html)
    - Basic concepts
        + **Split**: Split input data large than `mapred.max.split.size`, by default 64MB, into multiple segments. Each segment is feed to a mapper task.
        + **Map**: Operate on record-level and emits `(key, value)`. Mostly used to extract fields, transform fields, filter records, etc. 
        + **Combiner**: Run reducer early at mapper phase. An optimization method to reduce data writing to disks and sending over networks.
        + **Partition & Shuffle & Sort**: Decides which reducer task each `(key, list(values))` goes to.
        + **Reduce**: Operate on each `(key, list(values))`. Mostly used to aggregate values.
* hbase
    * [Performance tuning](http://kenwublog.com/hbase-performance-tuning)
    * [Load balancer](http://zhihongyu.blogspot.com/2011/04/load-balancer-in-hbase-090.html), [HBASE-3679](https://issues.apache.org/jira/browse/HBASE-3679)
