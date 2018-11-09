<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
        <h1>{{ helper.relativeTime(item.time) }}</h1>
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>