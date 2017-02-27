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
    marko_componentType = marko_registerComponent("/behealth$0.0.1/views/components/group-notebook-list/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  var variantClassName = (input.variant !== 'primary' && 'app-button-' + input.variant);

  var sizeClassName = (input.size !== 'normal' && 'app-button-' + input.size);

  out.w("<div class=\"row\"" +
    marko_attr("id", __component.id) +
    "><div class=\"col-md-8 col-sm-6 hidden-xs\"> <img src=\"img/laptop.png\" alt=\"Laptop\" class=\"img-responsive laptop\"> </div><div class=\"col-md-4 col-sm-6\"><h3><span>Experimente</span> comprar com a Behealth</h3><p> Alguma instrução de uso</p><ul class=\"list_order\"><li><span>1</span>Passo 1</li><li><span>2</span>Passo 2</li><li><span>3</span>Passo 3</li></ul> <a href=\"all_tour_list.html\" class=\"btn_1\">Experimente já</a> </div></div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
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
