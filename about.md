---
layout: default
title: About
permalink: /about/
---

  <div class="section about">
    <div class="container">
      <div class="row">
        <h3>About the Making It Realm</h3>
        <p><strong>{{ site.description }}</strong></p>
        <p>{{ site.callout-html }}</p>
        
        <h3>Browse all our issues:</h3>
        <ul>
          {% for exhibition in site.exhibitions reversed %}
              <li><a href="/exhibitions/{{ exhibition.issue }}">{{ exhibition.issue }}</a></li> 
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
