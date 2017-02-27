// Compiled using marko@4.0.0-rc.23 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = {
        onCreate: function(input) {},
        onInput: function(input) {
          return {
              size: input.size || "normal",
              variant: input.variant || "primary",
              body: input.label || input.renderBody,
              className: input["class"]
            };
        },
        handleClick: function(event) {
          console.log("click!");

          this.emit("click", {
              event: event
            });
        }
      },
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/behealth$0.0.1/views/components/comp-menu/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_classAttr = marko_helpers.ca,
    marko_attr = marko_helpers.a;

function isActive(link,actual) {
	//console.log(link,actual);
	
		if(link == actual){
			return 'active';
		}
		
		return 'not-active';
	};

function render(input, out, __component, component, state) {
  var data = input;

  var variantClassName = (input.variant !== 'primary' && 'app-button-' + input.variant);

  var sizeClassName = (input.size !== 'normal' && 'app-button-' + input.size);

  out.w("<nav class=\"col-md-7 col-sm-9 col-xs-9\"" +
    marko_attr("id", __component.id) +
    "><a class=\"cmn-toggle-switch cmn-toggle-switch__htx open_close\" href=\"javascript:void(0);\"><span>Menu mobile</span></a><div class=\"main-menu\"><div id=\"header_menu\"><a href=\"/home\" style=\"text-decoration:none;\"><img src=\"img/logo_sticky.png\" width=\"160\" height=\"34\" alt=\"City tours\" data-retina=\"true\"></a></div><a href=\"#\" class=\"open_close\" id=\"close_in\"><i class=\"icon_set_1_icon-77\"></i></a><ul><li" +
    marko_classAttr([
      isActive("/home", out.global.url)
    ]) +
    "><a href=\"/home\" class=\"show-submenu\">Home</a></li><li" +
    marko_classAttr([
      isActive("/quemsomos", out.global.url)
    ]) +
    marko_attr("data-_onclick", __component.d("handleClick", [
      1
    ]), false) +
    "><a href=\"/quemsomos\" class=\"show-submenu\">Quem somos</a></li><li class=\"submenu\"><a href=\"javascript:void(0);\" class=\"show-submenu\">Categorias <i class=\"icon-down-open-mini\"></i></a><ul><li><a href=\"#\">Categoria A</a></li><li><a href=\"#\">Categoria B</a></li><li><a href=\"#\">Categoria C</a></li><li><a href=\"#\">Categoria D</a></li><li><a href=\"#\">Categoria E</a></li></ul></li><li" +
    marko_classAttr([
      isActive("/destaques", out.global.url)
    ]) +
    "><a href=\"/destaques\" class=\"show-submenu\">Destaques</a></li><li" +
    marko_classAttr([
      "megamenu",
      "submenu",
      isActive("/destaques", out.global.url)
    ]) +
    "><a href=\"javascript:void(0);\" class=\"show-submenu-mega\">Fórmulas <i class=\"icon-down-open-mini\"></i></a><div class=\"menu-wrapper\"><div class=\"col-md-4\"><h3>Pages</h3><ul><li><a href=\"about.html\">About us</a></li><li><a href=\"general_page.html\">General page</a></li><li><a href=\"tourist_guide.html\">Tourist guide</a></li><li><a href=\"wishlist.html\">Wishlist page</a></li><li><a href=\"faq.html\">Faq</a></li><li><a href=\"faq_2.html\">Faq smooth scroll</a></li><li><a href=\"pricing_tables.html\">Pricing tables</a></li><li><a href=\"gallery_3_columns.html\">Gallery 3 columns</a></li><li><a href=\"gallery_4_columns.html\">Gallery 4 columns</a></li><li><a href=\"grid_gallery_1.html\">Grid gallery</a></li><li><a href=\"grid_gallery_2.html\">Grid gallery with filters</a></li></ul></div><div class=\"col-md-4\"><h3>Pages</h3><ul><li><a href=\"contact_us_1.html\">Contact us 1</a></li><li><a href=\"contact_us_2.html\">Contact us 2</a></li><li><a href=\"blog_right_sidebar.html\">Blog</a></li><li><a href=\"blog.html\">Blog left sidebar</a></li><li><a href=\"login.html\">Login</a></li><li><a href=\"register.html\">Register</a></li><li><a href=\"invoice.html\" target=\"_blank\">Invoice</a></li><li><a href=\"404.html\">404 Error page</a></li><li><a href=\"site_launch/index.html\">Site launch / Coming soon</a></li><li><a href=\"timeline.html\">Tour timeline</a></li><li><a href=\"page_with_map.html\"><i class=\"icon-map\"></i> Full screen map</a></li></ul></div><div class=\"col-md-4\"><h3>Elements</h3><ul><li><a href=\"index.html\"><i class=\"icon-columns\"></i> Header transparent</a></li><li><a href=\"header_plain.html\"><i class=\"icon-columns\"></i> Header plain</a></li><li><a href=\"header_transparent_colored.html\"><i class=\"icon-columns\"></i> Header transparent colored</a></li><li><a href=\"footer_2.html\"><i class=\"icon-columns\"></i> Footer with working newsletter</a></li><li><a href=\"icon_pack_1.html\"><i class=\"icon-inbox-alt\"></i> Icon pack 1 (1900)</a></li><li><a href=\"icon_pack_2.html\"><i class=\"icon-inbox-alt\"></i> Icon pack 2 (100)</a></li><li><a href=\"icon_pack_3.html\"><i class=\"icon-inbox-alt\"></i> Icon pack 3 (30)</a></li><li><a href=\"shortcodes.html\"><i class=\"icon-tools\"></i> Shortcodes</a></li><li><a href=\"newsletter_template/newsletter.html\" target=\"blank\"><i class=\" icon-mail\"></i> Responsive email template</a></li><li><a href=\"admin.html\"><i class=\"icon-cog-1\"></i> Admin area</a></li><li><a href=\"general_page.html\"><i class=\"icon-light-up\"></i> Weather Forecast</a></li> </ul></div></div></li></ul></div><ul id=\"top_tools\"><li><div class=\"dropdown dropdown-search\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-search\"></i></a><div class=\"dropdown-menu\"><form><div class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Search...\"><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" style=\"margin-left:0;\"><i class=\"icon-search\"></i></button></span></div></form></div></div></li><li><div class=\"dropdown dropdown-cart\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\" icon-basket-1\"></i>Cart (0) </a><ul class=\"dropdown-menu\" id=\"cart_items\"><li><div class=\"image\"><img src=\"img/thumb_cart_1.jpg\" alt=\"\"></div><strong><a href=\"#\">Item A</a>1x R$36.00 </strong><a href=\"#\" class=\"action\"><i class=\"icon-trash\"></i></a></li><li><div class=\"image\"><img src=\"img/thumb_cart_2.jpg\" alt=\"\"></div><strong><a href=\"#\">Item B</a>2x R$36.00 </strong><a href=\"#\" class=\"action\"><i class=\"icon-trash\"></i></a></li><li><div class=\"image\"><img src=\"img/thumb_cart_3.jpg\" alt=\"\"></div><strong><a href=\"#\">Item C</a>1x R$36.00 </strong><a href=\"#\" class=\"action\"><i class=\"icon-trash\"></i></a></li><li><div>Total: <span>R$120.00</span></div><a href=\"cart.html\" class=\"button_drop\">Ver carrinho</a><a href=\"payment.html\" class=\"button_drop outline\">Finalizar</a></li></ul></div></li></ul></nav>");
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
