---
layout: default
title: Slack Catalog
description: Search for internal, customized integrations or bots that can be integrated with Slack.
---
<div class="band band--MEDIUM bg--dark">
    <div class="container container--SMALL">
        <div class="align--CENTER text--WHITE">
            <h1>{{page.title}}</h1>
            <p>{{page.description}}</p>
            <div class="form--search">
                <input class="form--input" type="text" placeholder="Search for integration">
                <button class="form--submit">🔎</button>
            </div>
        </div>
    </div>
</div>

<div class="band">
    <div class="container container--section container--MEDIUM">
        <h3 class="text--WARM">Bots</h3>
        <div class="card--row">
            {% for collection in site.applications %}
                {% if collection.type == 'bot' %}
                    <div class="card">
                        <a href="{{collection.url}}">
                            {{collection.title}}
                        </a>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>
</div>

<div class="band">
    <div class="container container--section container--MEDIUM">
        <h3 class="text--COOL">Integrations</h3>
        <div class="card--row">
            {% for collection in site.applications %}
                {% if collection.type == 'integration' %}
                    <div class="card">
                        <a href="{{collection.url}}">
                            {{collection.title}}
                        </a>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>
</div>
