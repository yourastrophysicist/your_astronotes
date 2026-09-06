---
---
window.sitePages = [
  {% for p in site.pages %}
    {% if p.title %}
    {
      title: {{ p.title | jsonify }},
      url: {{ p.url | relative_url | jsonify }},
      path: {{ p.path | jsonify }}
    },
    {% endif %}
  {% endfor %}
];
var sitePages = window.sitePages;

