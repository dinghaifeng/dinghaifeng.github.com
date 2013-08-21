---
layout: page
title: My technical stuffs and ramblings
---
{% include JB/setup %}

#### Posts
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


#### Learning Notes
* [tech-notes](notes/tech-notes.html)
* [paper-reading](notes/paper-reading.html)


