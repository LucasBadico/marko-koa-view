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
    marko_widgetType = marko_registerWidget("/behealth$0.0.1/views/components/app-white-popular/index.marko", function() {
      return module.exports;
    }),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    group_box_icons_template = marko_loadTemplate(require.resolve("../group-box-icons")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    group_box_icons_tag = marko_loadTag(group_box_icons_template),
    group_notebook_list_template = marko_loadTemplate(require.resolve("../group-notebook-list")),
    group_notebook_list_tag = marko_loadTag(group_notebook_list_template),
    marko_attr = marko_helpers.a;

function render(input, out, widget, state) {
  var data = input;

  var variantClassName = (input.variant !== 'primary' && 'app-button-' + input.variant);

  var sizeClassName = (input.size !== 'normal' && 'app-button-' + input.size);

  out.w("<div class=\"\"" +
    marko_attr("id", widget.id) +
    "><div class=\"container margin_60\">");

  group_box_icons_tag({}, out);

  out.w("<hr>");

  group_notebook_list_tag({}, out);

  out.w("</div></div>");
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
    ],
    tags: [
      "../group-box-icons",
      "../group-notebook-list"
    ]
  };
