// Compiled using marko@4.0.0-rc.18 - DO NOT EDIT
var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = {
        onCreate: function(input) {
          console.log("create ? li-comp-profile", input);

          this.state = {};

          this.state.fullname = input.user.fullname;

          this.state.role = input.user.role;

          console.log(JSON.stringify(this.state));
        },
        onInput: function(input) {
          console.log("input", input);

          return {
              user: input.user || "none",
              size: input.size || "normal",
              variant: input.variant || "primary",
              body: input.label || input.renderBody,
              className: input["class"]
            };
        },
        handleClick: function(event) {
          console.log("click!", this.state);

          this.emit("click", {
              event: event
            });
        }
      },
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/behealth$0.0.1/views/components/comp-li-profile-popup/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function isActive(link,actual) {
	//console.log(link,actual);
	
		if(link == actual){
			return 'active';
		}
		
		return 'not-active';
	};

function render(input, out, widget, state) {
  var data = input;

  var variantClassName = (input.variant !== 'primary' && 'app-button-' + input.variant);

  var sizeClassName = (input.size !== 'normal' && 'app-button-' + input.size);

  out.w("<li" +
    marko_attr("id", widget.id) +
    "><div class=\"dropdown dropdown-access\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"access_link\">Sign in</a><div class=\"dropdown-menu\"><div class=\"row\"><div class=\"col-md-6 col-sm-6 col-xs-6\"><a href=\"#\" class=\"bt_facebook\"><i class=\"icon-facebook\"></i>Facebook </a></div><div class=\"col-md-6 col-sm-6 col-xs-6\"><a href=\"#\" class=\"bt_paypal\"><i class=\"icon-paypal\"></i>Paypal </a></div></div><div class=\"login-or\"><hr class=\"hr-or\"><span class=\"span-or\">or " +
    marko_escapeXml(out.global.currentUser) +
    "</span></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" id=\"inputUsernameEmail\" placeholder=\"Email\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\"></div><a id=\"forgot_pw\" href=\"#\">Forgot password?</a><input type=\"submit\" name=\"Sign in\" value=\"Sign in\" id=\"Sign_in\" class=\"button_drop\"><input type=\"submit\" name=\"Sign up\" value=\"Sign up\" id=\"Sign_up\" class=\"button_drop outline\"></div></div> </li>");
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
