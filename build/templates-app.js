angular.module('templates-app', ['contacts/contacts.tpl.html', 'home/home.tpl.html', 'services/services.tpl.html', 'works/works.tpl.html']);

angular.module("contacts/contacts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contacts/contacts.tpl.html",
    "<section id=\"contact\" class=\"pfblock\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-sm-6 col-sm-offset-3\">\n" +
    "\n" +
    "                <div class=\"pfblock-header\">\n" +
    "                    <h2 class=\"pfblock-title\">Drop me a line</h2>\n" +
    "                    <div class=\"pfblock-line\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div><!-- .row -->\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-sm-6 col-sm-offset-3\">\n" +
    "\n" +
    "                <form id=\"contact-form\" role=\"form\" action=\"assets/php/contact.php\" method=\"post\">\n" +
    "                    <div class=\"ajax-hidden\">\n" +
    "                        <div class=\"form-group wow fadeInUp\">\n" +
    "                            <label class=\"sr-only\" for=\"c_name\">Name</label>\n" +
    "                            <input type=\"text\" id=\"c_name\" class=\"form-control\" name=\"c_name\" placeholder=\"Name\">\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group wow fadeInUp\" data-wow-delay=\".1s\">\n" +
    "                            <label class=\"sr-only\" for=\"c_email\">Email</label>\n" +
    "                            <input type=\"email\" id=\"c_email\" class=\"form-control\" name=\"c_email\" placeholder=\"E-mail\">\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group wow fadeInUp\" data-wow-delay=\".2s\">\n" +
    "                            <textarea class=\"form-control\" id=\"c_message\" name=\"c_message\" rows=\"7\" placeholder=\"Message\"></textarea>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <button type=\"submit\" class=\"btn btn-lg btn-block wow fadeInUp\" data-wow-delay=\".3s\">Send Message</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"ajax-response\"></div>\n" +
    "                </form>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div><!-- .row -->\n" +
    "    </div><!-- .container -->\n" +
    "</section>\n" +
    "<footer id=\"footer\" class=\"footer\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-sm-12\">\n" +
    "\n" +
    "                <ul class=\"social-links\">\n" +
    "                    <li class=\"social-linksli\"><a  target=\"_blank\" href=\"https://www.facebook.com/kuden.and.ko\" class=\"social-linkslia\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "                    <li class=\"social-linksli\"><a target=\"_blank\" href=\"http://vk.com/rickcy\" class=\"social-linkslia\" data-wow-delay=\".1s\"><i class=\"fa fa-vk\"></i></a></li>\n" +
    "\n" +
    "\n" +
    "                </ul>\n" +
    "\n" +
    "                <p class=\"heart\">\n" +
    "                    Made with <span class=\"fa fa-heart fa-2x animated pulse\"></span> in Russia\n" +
    "                </p>\n" +
    "                <p class=\"copyright\">\n" +
    "                    © 2016 Евгений Куденко\n" +
    "                </p>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div><!-- .row -->\n" +
    "    </div><!-- .container -->\n" +
    "</footer>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<section id=\"home\" class=\"pfblock-image screen-height\">\n" +
    "    <div class=\"home-overlay\"></div>\n" +
    "  <div class=\"intro\">\n" +
    "\n" +
    "    <div class=\"photo\"><img src=\"assets/images/photo.jpg\" alt=\"Photo\" width=\"10%\" style=\"min-width: 102px;border-radius: 50%;opacity: 1\"/></div>\n" +
    "    <div class=\"start\">Hello, my name is Evgeniy Kudenko and I am</div>\n" +
    "    <h1>Full Stack Web Developer</h1>\n" +
    "    <div class=\"start\">creating modern and responsive Web Application {{console}}</div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</section>\n" +
    "<footer id=\"footer\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "      <div class=\"col-sm-12\">\n" +
    "\n" +
    "        <ul class=\"social-links\">\n" +
    "          <li class=\"social-linksli\"><a  target=\"_blank\" href=\"https://www.facebook.com/kuden.and.ko\" class=\"social-linkslia\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "          <li class=\"social-linksli\"><a target=\"_blank\" href=\"http://vk.com/rickcy\" class=\"social-linkslia\" data-wow-delay=\".1s\"><i class=\"fa fa-vk\"></i></a></li>\n" +
    "\n" +
    "\n" +
    "        </ul>\n" +
    "\n" +
    "        <p class=\"heart\">\n" +
    "          Made with <span class=\"fa fa-heart fa-2x animated pulse\"></span> in Russia\n" +
    "        </p>\n" +
    "        <p class=\"copyright\">\n" +
    "          © 2016 Евгений Куденко\n" +
    "        </p>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "    </div><!-- .row -->\n" +
    "  </div><!-- .container -->\n" +
    "</footer>");
}]);

angular.module("services/services.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("services/services.tpl.html",
    "<style type=\"text/css\">\n" +
    "  h2{\n" +
    "    margin: 0;\n" +
    "    color: #666;\n" +
    "    padding-top: 40px;\n" +
    "    font-size: 52px;\n" +
    "    font-family: \"trebuchet ms\", sans-serif;\n" +
    "  }\n" +
    "  .item{\n" +
    "    background: #f5f5f5;\n" +
    "    text-align: center;\n" +
    "    height:950px !important;\n" +
    "  }\n" +
    "\n" +
    "  .carousel-caption{\n" +
    "    left: 0;\n" +
    "    right: 0;\n" +
    "    width: 100%;\n" +
    "    top: 0;\n" +
    "  }\n" +
    ".carousel-indicators{\n" +
    "  bottom: 0;\n" +
    "  color: red;\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<!-- Карусель -->\n" +
    "<div id=\"myCarousel\" class=\"carousel slide\" data-interval=\"0\" data-ride=\"carousel\">\n" +
    "  <!-- Индикаторы для карусели -->\n" +
    "  <ol class=\"carousel-indicators\">\n" +
    "    <!-- Перейти к 0 слайду карусели с помощью соответствующего индекса data-slide-to=\"0\" -->\n" +
    "    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "    <!-- Перейти к 1 слайду карусели с помощью соответствующего индекса data-slide-to=\"1\" -->\n" +
    "    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
    "\n" +
    "\n" +
    "  </ol>\n" +
    "  <!-- Слайды карусели -->\n" +
    "  <div class=\"carousel-inner\">\n" +
    "    <!-- Слайды создаются с помощью контейнера с классом item, внутри которого помещается содержимое слайда -->\n" +
    "    <div class=\"active item\">\n" +
    "\n" +
    "      <div class=\"carousel-caption\">\n" +
    "\n" +
    "          <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "              <div class=\"col-sm-6 col-sm-offset-3\">\n" +
    "\n" +
    "                <div class=\"pfblock-header wow fadeInUp\">\n" +
    "                  <h2 class=\"pfblock-title\">This is what I do</h2>\n" +
    "                  <div class=\"pfblock-line\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "<div class=\"hidden-xs\">\n" +
    "  <br/>\n" +
    "  <br/>\n" +
    "  <br/>\n" +
    "  <br/>\n" +
    "  <br/>\n" +
    "  <br/>\n" +
    "</div>\n" +
    "              <div class=\"col-sm-3\">\n" +
    "\n" +
    "                <div class=\"iconbox wow slideInLeft\">\n" +
    "                  <div class=\"iconbox-icon\">\n" +
    "                    <span class=\"icon-magic-wand\"></span>\n" +
    "                  </div>\n" +
    "                  <div class=\"iconbox-text\">\n" +
    "                    <h3 class=\"iconbox-title\">Design</h3>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"col-sm-3\">\n" +
    "\n" +
    "                <div class=\"iconbox wow slideInLeft\">\n" +
    "                  <div class=\"iconbox-icon\">\n" +
    "                    <span class=\"icon-puzzle\"></span>\n" +
    "                  </div>\n" +
    "                  <div class=\"iconbox-text\">\n" +
    "                    <h3 class=\"iconbox-title\">Front-end</h3>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"col-sm-3\">\n" +
    "\n" +
    "                <div class=\"iconbox wow slideInLeft\">\n" +
    "                  <div class=\"iconbox-icon\">\n" +
    "                    <span class=\"icon-puzzle\"></span>\n" +
    "                  </div>\n" +
    "                  <div class=\"iconbox-text\">\n" +
    "                    <h3 class=\"iconbox-title\">Back-end</h3>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"col-sm-3\">\n" +
    "\n" +
    "                <div class=\"iconbox wow slideInRight\">\n" +
    "                  <div class=\"iconbox-icon\">\n" +
    "                    <span class=\"icon-question\"></span>\n" +
    "                  </div>\n" +
    "                  <div class=\"iconbox-text\">\n" +
    "                    <h3 class=\"iconbox-title\">Consultation</h3>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "\n" +
    "              </div>\n" +
    "\n" +
    "            </div><!-- .row -->\n" +
    "          </div><!-- .container -->\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- Слайд №2 -->\n" +
    "    <div class=\"item\">\n" +
    "\n" +
    "      <div class=\"carousel-caption\">\n" +
    "\n" +
    "        <div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-sm-6 col-sm-offset-3\">\n" +
    "\n" +
    "              <div class=\"pfblock-header wow fadeInUp\">\n" +
    "                <h2 class=\"pfblock-title\">This Skills i use</h2>\n" +
    "                <div class=\"pfblock-line\"></div>\n" +
    "\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "          </div>\n" +
    "          <div class=\"hidden-xs\">\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-sm-4\">\n" +
    "\n" +
    "              <div class=\"iconbox wow slideInLeft\">\n" +
    "                <div class=\"iconbox-icon\">\n" +
    "                  <span class=\"icon-magic-wand\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"iconbox-text\">\n" +
    "                  <h3 class=\"iconbox-title\">Photoshop</h3>\n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-sm-4\">\n" +
    "\n" +
    "              <div class=\"iconbox wow slideInLeft\">\n" +
    "                <div class=\"iconbox-icon\">\n" +
    "                  <span class=\"icon-puzzle\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"iconbox-text\">\n" +
    "                  <h3 class=\"iconbox-title\">Html|Css</h3>\n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-sm-4\">\n" +
    "\n" +
    "              <div class=\"iconbox wow slideInLeft\">\n" +
    "                <div class=\"iconbox-icon\">\n" +
    "                  <span class=\"icon-puzzle\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"iconbox-text\">\n" +
    "                  <h3 class=\"iconbox-title\">AngularJS</h3>\n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-sm-4\">\n" +
    "\n" +
    "              <div class=\"iconbox wow slideInRight\">\n" +
    "                <div class=\"iconbox-icon\">\n" +
    "                  <span class=\"icon-question\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"iconbox-text\">\n" +
    "                  <h3 class=\"iconbox-title\">JS|Jquery</h3>\n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-sm-4\">\n" +
    "\n" +
    "              <div class=\"iconbox wow slideInRight\">\n" +
    "                <div class=\"iconbox-icon\">\n" +
    "                  <span class=\"icon-question\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"iconbox-text\">\n" +
    "                  <h3 class=\"iconbox-title\">Php|MySQL</h3>\n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "\n" +
    "              <div class=\"iconbox wow slideInRight\">\n" +
    "                <div class=\"iconbox-icon\">\n" +
    "                  <span class=\"icon-question\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"iconbox-text\">\n" +
    "                  <h3 class=\"iconbox-title\">Java|Grails|Spring</h3>\n" +
    "\n" +
    "                </div>\n" +
    "              </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "          </div><!-- .row -->\n" +
    "        </div><!-- .container -->\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "  </div>\n" +
    "  <!-- Навигация для карусели -->\n" +
    "  <!-- Кнопка, осуществляющая переход на предыдущий слайд с помощью атрибута data-slide=\"prev\" -->\n" +
    "  <a class=\"carousel-control left\" data-target=\"#myCarousel\" data-slide=\"prev\">\n" +
    "    <span class=\"fa fa-angle-double-left\"></span>\n" +
    "  </a>\n" +
    "  <!-- Кнопка, осуществляющая переход на следующий слайд с помощью атрибута data-slide=\"next\" -->\n" +
    "  <a class=\"carousel-control right\" data-target=\"#myCarousel\" data-slide=\"next\">\n" +
    "    <span class=\"fa fa-angle-double-right\"></span>\n" +
    "  </a>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("works/works.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("works/works.tpl.html",
    "<section id=\"portfolio\" class=\"pfblock\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-sm-6 col-sm-offset-3\">\n" +
    "\n" +
    "                <div class=\"pfblock-header wow fadeInUp\">\n" +
    "                    <h2 class=\"pfblock-title\">My works</h2>\n" +
    "                    <div class=\"pfblock-line\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div><!-- .row -->\n" +
    "\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 deloved\">\n" +
    "\n" +
    "                <div class=\"grid wow zoomIn\">\n" +
    "                    <figure class=\"effect-bubba\">\n" +
    "                        <img src=\"assets/images/item-1.jpg\" alt=\"img01\"/>\n" +
    "                        <figcaption>\n" +
    "                            <h2>Business-portal <span>\"DELOVED\"</span></h2>\n" +
    "\n" +
    "                        </figcaption>\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-4 slimbody\">\n" +
    "\n" +
    "                <div class=\"grid wow zoomIn\">\n" +
    "                    <figure class=\"effect-bubba\">\n" +
    "                        <img src=\"assets/images/slim.jpg\" alt=\"img01\"/>\n" +
    "                        <figcaption>\n" +
    "                            <h2>Template<span><br/>Slimbody</span></h2>\n" +
    "\n" +
    "                        </figcaption>\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-4 angshop\">\n" +
    "\n" +
    "                <div class=\"grid wow zoomIn\">\n" +
    "                    <figure class=\"effect-bubba\">\n" +
    "                        <img src=\"assets/images/angshop.jpg\" alt=\"img01\"/>\n" +
    "                        <figcaption>\n" +
    "                            <h2>ANG|SHOP<span><br/>IN PROCESSES</span></h2>\n" +
    "\n" +
    "                        </figcaption>\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-4 maket\">\n" +
    "\n" +
    "                <div class=\"grid wow zoomIn\">\n" +
    "                    <figure class=\"effect-bubba\">\n" +
    "                        <img src=\"assets/images/inprocesess.jpg\" alt=\"img01\"/>\n" +
    "                        <figcaption>\n" +
    "                            <h2>Online store<span> Maket</span></h2>\n" +
    "\n" +
    "                        </figcaption>\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-4 itunes\">\n" +
    "\n" +
    "                <div class=\"grid wow zoomIn\">\n" +
    "                    <figure class=\"effect-bubba\">\n" +
    "                        <img src=\"assets/images/inprocesess.jpg\" alt=\"img01\"/>\n" +
    "                        <figcaption>\n" +
    "                            <h2>Itunes<span><br/>Top 60 movies</span></h2>\n" +
    "\n" +
    "                        </figcaption>\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-4\">\n" +
    "\n" +
    "                <div class=\"grid wow zoomIn\">\n" +
    "                    <figure class=\"effect-bubba\">\n" +
    "                        <img src=\"assets/images/inprocesess.jpg\" alt=\"img01\"/>\n" +
    "                        <figcaption>\n" +
    "                            <h2>IN<span> PROCESSES</span></h2>\n" +
    "\n" +
    "                        </figcaption>\n" +
    "                    </figure>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div><!-- .contaier -->\n" +
    "\n" +
    "</section>");
}]);
