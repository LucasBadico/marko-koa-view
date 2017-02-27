// Compiled using marko@4.0.0-rc.18 - DO NOT EDIT
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
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/behealth$0.0.1/views/components/group-box-icons/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, widget, state) {
  var data = input;

  var variantClassName = (input.variant !== 'primary' && 'app-button-' + input.variant);

  var sizeClassName = (input.size !== 'normal' && 'app-button-' + input.size);

  out.w("<div class=\"row\"" +
    marko_attr("id", widget.id) +
    "><div class=\"col-md-4 wow zoomIn\" data-wow-delay=\"0.2s\"><div class=\"feature_home\"> <i class=\"icon-truck-1\"></i><h3>Frete <span>GRÁTIS</span></h3><p> para pedidos feitos nos estabelecimentos da sua região </p> <a href=\"/faq?frete\" class=\"btn_1 outline\">Saiba mais</a> </div></div><div class=\"col-md-4 wow zoomIn\" data-wow-delay=\"0.4s\"><div class=\"feature_home\"> <i class=\" icon-money-2\"></i><h3><span>Compromisso</span> sempre</h3><p>O menor preço garantido. Aqui a gente cobre qualquer oferta. </p> <a href=\"/faq?preco\" class=\"btn_1 outline\">Saiba mais</a> </div></div><div class=\"col-md-4 wow zoomIn\" data-wow-delay=\"0.6s\"><div class=\"feature_home\"> <i class=\" icon-newspaper-1\"></i><h3>Venha ser <span>#BeHealth</span> </h3><p>Acompanhe o blog da maior rede de saúde e bem estar </p> <a href=\"https://blog.behealthbrasil.com.br\" target=\"_blank\" class=\"btn_1 outline\">Saiba mais</a> </div></div></div>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  }, marko_component);

marko_template.Widget = marko_widgets.w(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.less",
      {
          type: "require",
          path: "./index.marko"
        },
      {
          type: "require",
          path: "marko/widgets"
        }
    ]
  };
