---
title: Meet the team
---

<ul>
    {% for item in site.team %}
        <li>
            <h2><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></h2>
            {{ item.excerpt }}
        </li>
    {% endfor %}
</ul>
