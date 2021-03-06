// Compiled using marko@4.0.0-rc.23 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = {
        onInput: function(input) {
          return {
              size: input.size || "normal",
              variant: input.variant || "primary",
              body: input.label || input.renderBody,
              className: input["class"]
            };
        },
        handleClick: function(event) {
          this.emit("click", {
              event: event
            });
        }
      },
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/behealth$0.0.1/views/components/group-section-search/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var variantClassName = (input.variant !== 'primary' && 'app-button-' + input.variant);

  var sizeClassName = (input.size !== 'normal' && 'app-button-' + input.size);

  out.w("<section" +
    marko_attr("id", __component.id) +
    "><div id=\"search\"><div id=\"hero\" style=\"position: relative; height: inherit; background: none;&#10; background-size: cover; color: #fff; width: 100%; font-size: 16px; display: table; z-index: 99; text-align: center;  text-transform: uppercase;\"> <div class=\"intro_title\" style=\" padding-bottom: 5%; padding-top: 5%;\"><h3 style=\"font-weight: bolder;\" class=\"animated fadeInDown\">Compare e compre <span style=\"color:white;\">manipulados</span> no único comparador de preços do Brasil</h3><p class=\"animated fadeInDown\">Seguro. Rápido. Prático e sempre pelo menor preço!</p></div></div><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#buscar\" data-toggle=\"tab\"><i class=\"icon-edit-alt\"></i> Buscar</a></li><li><a href=\"#photo\" data-toggle=\"tab\"><i class=\"icon-camera-7\"></i> Enviar Receita</a></li></ul><div class=\"tab-content\"><div class=\"tab-pane active\" id=\"buscar\"><h3>Faça sua busca pela composição do medicamento, substância a substância</h3><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group\"><label>Substância</label><input type=\"text\" class=\"form-control\" id=\"words\" name=\"substancia\" placeholder=\"\"><button class=\"btn_1 green inside-input\"><i class=\"icon-plus\"></i> Outra substância</button></div></div><script src=\"js/typing.js\"></script><script>\n\t\t\t\t\t\t\t\t  // var strings = new Array(\"www.yourdomain.com\")\n\t\t\t\t\t\t\t\t  var strings = new Array(\"Fenasterida 10mg\", \"Ou\", \"complexo vitaminíco\", \"Queratina\", \"Escreva a sua primeira substância\"); // This is multi words\n\t\t\t\t\t\t\t\t  var typingSpeed = 100;\n\t\t\t\t\t\t\t\t  var deleteSpeed = 40;\n\t\t\t\t\t\t\t\t  var isLoop = true;\n\t\t\t\t\t\t\t\t  var isPlaceholder = true;\n\t\t\t\t\t\t\t\t</script></div><div class=\"row\"><div style=\"padding: 15px;\"><table class=\"table table-hover\"> <thead> <tr> <th class=\"col-md-5\">Fórmula</th> <th class=\"col-md-3\">Menor preço</th> <th class=\"col-md-4\"></th> </tr></thead> <tbody><tr> <td style=\"vertical-align: middle;\">Fenasterida 2mg</td> <td style=\"vertical-align: middle;\">R$20,00</td><td><a class=\"btn_1 green outline small\"><i class=\"icon-info\"></i> ver detalhes</a> <a class=\"btn_1 outline small btn-danger\"><i class=\"icon-cancel-7\"></i> excluir</a></td> </tr> <tr> <td style=\"vertical-align: middle;\">Omega 3</td> <td style=\"vertical-align: middle;\">R$20,00</td> <td><a class=\"btn_1 green outline small\"><i class=\"icon-info\"></i> ver detalhes</a> <a class=\"btn_1 outline small btn-danger\"><i class=\"icon-cancel-7\"></i> excluir</a></td> </tr> <tr> <td style=\"vertical-align: middle;\">Complexo A</td> <td style=\"vertical-align: middle;\">R$120,00</td> <td><a class=\"btn_1 green outline small\"><i class=\"icon-info\"></i> ver detalhes</a> <a class=\"btn_1 outline small btn-danger\"><i class=\"icon-cancel-7\"></i> excluir</a></td></tr> </tbody> </table></div></div><a class=\"btn_1 green outline\" style=\" top: -9px; position: relative; margin-bottom: 10px;\"><i class=\"icon-cart\"></i> Ir para carrinho</a> <button class=\"btn_1 green\" style=\" top: -9px; position: relative; margin-bottom: 10px;\">Finalizar compra</button></div><div class=\"tab-pane\" id=\"photo\"><h3>Envie uma imagem da sua receita</h3><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label>Tire uma foto</label><input type=\"file\" name=\"file-6\" class=\"form-control\" style=\"padding-left: 17px; padding-top: 10px; position: relative; z-index:100;background-color: transparent;\"><label for=\"file-6\" style=\"position: absolute; top: 36px;\"> <span style=\"width:165px\"></span> <strong style=\"    background-color: #15aa7b; width: 170px; text-align: center; padding: 10px; color: white; border-radius: 3px; margin-left: 3px;\"><i class=\"icon-camera-7\"></i> Tire uma foto&hellip;</strong></label></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label>Faça upload</label><input class=\"form-control\" name=\"file-7\" type=\"file\" style=\" padding-left: 60px; padding-top: 11px; position: relative; z-index:100;background-color: transparent;\"><label for=\"file-7\" style=\" padding: 0px; line-height: 35px; margin-top: 2px; position: absolute; top: 26px;\"><span style=\"width:165px\"></span> <strong style=\"fill:white;background-color: #15aa7b; padding: 10px; padding-right: 15px; margin-left: 3px; border-radius: 2px;color: white;\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"><path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"></path></svg> Escolha um arquivo&hellip;</strong></label></div></div></div> </div><div class=\"tab-pane\" id=\"transfers\"><h3>Search Transfers in Paris</h3><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label class=\"select-label\">Pick up location</label><select class=\"form-control\"><option value=\"orly_airport\">Orly airport</option><option value=\"gar_du_nord\">Gar du Nord Station</option><option value=\"hotel_rivoli\">Hotel Rivoli</option></select></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label class=\"select-label\">Drop off location</label><select class=\"form-control\"><option value=\"orly_airport\">Orly airport</option><option value=\"gar_du_nord\">Gar du Nord Station</option><option value=\"hotel_rivoli\">Hotel Rivoli</option></select></div></div></div><div class=\"row\"><div class=\"col-md-3\"><div class=\"form-group\"><label><i class=\"icon-calendar-7\"></i> Date</label><input class=\"date-pick form-control\" data-date-format=\"M d, D\" type=\"text\"></div></div><div class=\"col-md-3\"><div class=\"form-group\"><label><i class=\" icon-clock\"></i> Time</label><input class=\"time-pick form-control\" value=\"12:00 AM\" type=\"text\"></div></div><div class=\"col-md-2 col-sm-3\"><div class=\"form-group\"><label>Adults</label><div class=\"numbers-row\"><input type=\"text\" value=\"1\" id=\"adults\" class=\"qty2 form-control\" name=\"quantity\"></div></div></div><div class=\"col-md-4 col-sm-9\"><div class=\"form-group\"><div class=\"radio_fix\"><label class=\"radio-inline\" style=\"padding-left:0\"><input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\" checked> One Way</label></div><div class=\"radio_fix\"><label class=\"radio-inline\"><input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> Return</label></div></div></div></div><hr><button class=\"btn_1 green\"><i class=\"icon-search\"></i>Search now</button></div><div class=\"tab-pane\" id=\"restaurants\"><h3>Search Restaurants in Paris</h3><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label>Search by name</label><input type=\"text\" class=\"form-control\" id=\"restaurant_name\" name=\"restaurant_name\" placeholder=\"Type your search terms\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label>Food type</label><select class=\"ddslick\" name=\"category_2\"><option value=\"0\" data-imagesrc=\"img/icons_search/all_restaurants.png\" selected>All restaurants</option><option value=\"1\" data-imagesrc=\"img/icons_search/fast_food.png\">Fast food</option><option value=\"2\" data-imagesrc=\"img/icons_search/pizza_italian.png\">Pizza / Italian</option><option value=\"3\" data-imagesrc=\"img/icons_search/international.png\">International</option><option value=\"4\" data-imagesrc=\"img/icons_search/japanese.png\">Japanese</option><option value=\"5\" data-imagesrc=\"img/icons_search/chinese.png\">Chinese</option><option value=\"6\" data-imagesrc=\"img/icons_search/bar.png\">Coffee Bar</option></select></div></div></div><div class=\"row\"><div class=\"col-md-3\"><div class=\"form-group\"><label><i class=\"icon-calendar-7\"></i> Date</label><input class=\"date-pick form-control\" data-date-format=\"M d, D\" type=\"text\"></div></div><div class=\"col-md-3\"><div class=\"form-group\"><label><i class=\" icon-clock\"></i> Time</label><input class=\"time-pick form-control\" value=\"12:00 AM\" type=\"text\"></div></div><div class=\"col-md-2 col-sm-3 col-xs-6\"><div class=\"form-group\"><label>Adults</label><div class=\"numbers-row\"><input type=\"text\" value=\"1\" id=\"adults\" class=\"qty2 form-control\" name=\"adults\"></div></div></div><div class=\"col-md-2 col-sm-3 col-xs-6\"><div class=\"form-group\"><label>Children</label><div class=\"numbers-row\"><input type=\"text\" value=\"0\" id=\"children\" class=\"qty2 form-control\" name=\"children\"></div></div></div></div><hr><button class=\"btn_1 green\"><i class=\"icon-search\"></i>Search now</button></div></div></div></section>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType,
    id: "search_container"
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.less",
      {
          type: "require",
          path: "./"
        }
    ]
  };
