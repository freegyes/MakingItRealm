---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Making It Realm</title>
  <meta name="description" content="Making It Realm">
  <meta name="author" content="MIR community">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">
  <link rel="stylesheet" href="css/custom.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.ico">

</head>

<body>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

  <div class="section gallery">
        <div class="container js-creation-container">
          
          {% for creation in site.creations %}
            {% assign author = site.authors | where:"path", creation.author | first %}
              
              <div class="row js-creation">
                <div class="one-half column">
                    <a href="{{ creation.link }}">
                      <img class="u-max-full-width framed" 
                        src="{{ creation.image }}" 
                        alt="{{ creation.image_alt }}">
                    </a>
                </div>
                <div class="one-half column">
                    <h3>{{ creation.title }}</h3>

                    <div class="author-portrait u-pull-right">
                      <img class="portrait"
                        src="{{ author.portrait }}" 
                        alt="A portrait">
                    </div>
                    <p>Made real by <a href="{{ author.link }}">{{ author.display_name }}</a>.</p>
                </div>
            </div>
            
          {% endfor %}

        </div>
      </div>


<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>