function generateTOC(insertIn, heading) {
  var toc_container = jQuery("<div id='tocBlock'></div>");
  var div = jQuery("<ul id='toc'></ul>");
  var content = $(insertIn).first();

  if (heading != undefined && heading != null) {
    toc_container.append('<span class="tocHeading">' + heading + '</span>');
  }

  div.tableOfContents(content, {startLevel: 2});
  toc_container.append(div);
  content.prepend(toc_container);
}
