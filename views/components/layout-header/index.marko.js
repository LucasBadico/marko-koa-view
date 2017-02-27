// Compiled using marko@4.0.0-rc.18 - DO NOT EDIT
var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = {
        onCreate: function(input) {},
        onInput: function(input) {},
        handleClick: function(event) {
          this.emit("click", {
              event: event
            });
        }
      },
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/behealth$0.0.1/views/components/layout-header/index.marko", function() {
      return module.exports;
    }),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    comp_li_profile_popup_template = marko_loadTemplate(require.resolve("../comp-li-profile-popup")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    comp_li_profile_popup_tag = marko_loadTag(comp_li_profile_popup_template),
    comp_menu_template = marko_loadTemplate(require.resolve("../comp-menu")),
    comp_menu_tag = marko_loadTag(comp_menu_template),
    marko_attr = marko_helpers.a;

function render(input, out, widget, state) {
  var data = input;

  var variantClassName = (input.variant !== 'primary' && 'app-button-' + input.variant);

  var sizeClassName = (input.size !== 'normal' && 'app-button-' + input.size);

  out.w("<header" +
    marko_attr("id", widget.id) +
    "><div id=\"top_line\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-6 col-sm-6 col-xs-6\"><i class=\"icon-phone\"></i><strong>0045 043204434</strong></div><div class=\"col-md-6 col-sm-6 col-xs-6\"><ul id=\"top_links\">");

  comp_li_profile_popup_tag({
      user: out.global.currentUser
    }, out);

  out.w("<li><a href=\"wishlist.html\" id=\"wishlist_link\">Favoritos</a></li></ul></div></div></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-md-5 col-sm-3 col-xs-3\"><div id=\"logo\"><a href=\"/home\"><img src=\"img/logo_white.png\" width=\"160\" height=\"34\" alt=\"City tours\" data-retina=\"true\" class=\"logo_normal\"></a><a href=\"/home\"><img src=\"img/logo_sticky.png\" width=\"160\" height=\"34\" alt=\"City tours\" data-retina=\"true\" class=\"logo_sticky\"></a></div></div>");

  comp_menu_tag({}, out);

  out.w("</div></div></header>");
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
      "../comp-li-profile-popup",
      "../comp-menu"
    ]
  };
