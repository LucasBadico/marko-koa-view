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
    marko_widgetType = marko_registerWidget("/behealth$0.0.1/views/components/app-register/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, widget, state) {
  var data = input;

  var variantClassName = (input.variant !== 'primary' && 'app-button-' + input.variant);

  var sizeClassName = (input.size !== 'normal' && 'app-button-' + input.size);

  out.w("<section" +
    marko_attr("id", widget.id) +
    " class=\"login\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\"><div id=\"login\"><div class=\"text-center\"><img src=\"img/logo_sticky.png\" alt=\"\" data-retina=\"true\"></div><hr><form><div class=\"form-group\"><label>Username</label><input type=\"text\" class=\" form-control\" placeholder=\"Username\"></div><div class=\"form-group\"><label>Email</label><input type=\"email\" class=\" form-control\" placeholder=\"Email\"></div><div class=\"form-group\"><label>Password</label><input type=\"password\" class=\" form-control\" id=\"password1\" placeholder=\"Password\"></div><div class=\"form-group\"><label>Confirm password</label><input type=\"password\" class=\" form-control\" id=\"password2\" placeholder=\"Confirm password\"></div><div id=\"pass-info\" class=\"clearfix\"></div><button class=\"btn_full\">Create an account</button></form></div></div></div></div></section>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType,
    id: "hero"
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
