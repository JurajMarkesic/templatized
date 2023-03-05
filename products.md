---
title: Products
---

<ul>
    {% for item in site.products %}
        <li>
            <h2><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></h2>
            {{ item.excerpt }}
        </li>
    {% endfor %}
</ul>
