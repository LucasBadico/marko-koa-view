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
    marko_widgetType = marko_registerWidget("/behealth$0.0.1/views/components/comp-banner-full-line/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, widget, state) {
  var data = input;

  var variantClassName = (input.variant !== 'primary' && 'app-button-' + input.variant);

  var sizeClassName = (input.size !== 'normal' && 'app-button-' + input.size);

  out.w("<div class=\"banner colored add_bottom_30\" style=\"margin-bottom:0\"" +
    marko_attr("id", widget.id) +
    "><h4>Você <span>SABIA?</span></h4><p style=\"font-size:18px\"> O preço de um manipulado para outro pode variar em até 400% </p> <a href=\"/faq?precos\" class=\"btn_1 white\">saiba mais</a> </div>");
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
