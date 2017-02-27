// Compiled using marko@4.0.0-rc.18 - DO NOT EDIT
var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = ({
    onInput: function (input) {
        var value = input.value || 0;
        this.state = { value: value };
    },
    handleIncrementClick: function (delta) {
        this.state.value += delta;
        var value = this.state.value;
        var send = { value: value };
        console.log(value);
        $.post('/tryPost', send, function (data) {
            console.log(data);
        });
    },
    handleInputKeyUp: function (event, el) {
        var newValue = el.value;
        if (/^-?[0-9]+$/.test(newValue)) {
            this.state.value = parseInt(newValue, 10);
        }
    }
}),
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/fullstack-challenge$1.0.0/views/components/app-number-spinner/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_classAttr = marko_helpers.ca;

require("./style.css");

function getClassNameForValue(value) {
    if (value < 0) {
        return 'negative';
    } else if (value > 0) {
        return 'positive';
    }
};

function render(input, out, widget, state) {
  var data = input;

  var value=state.value;

  out.w("<div" +
    marko_classAttr([
      "number-spinner",
      getClassNameForValue(value)
    ]) +
    marko_attr("id", widget.id) +
    "><button type=\"button\"" +
    marko_attr("data-_onclick", widget.d("handleIncrementClick", [
      -1
    ]), false) +
    ">-</button><input type=\"text\"" +
    marko_attr("value", state.value) +
    " size=\"4\"" +
    marko_attr("data-_onkeyup", widget.d("handleInputKeyUp"), false) +
    "><button type=\"button\"" +
    marko_attr("data-_onclick", widget.d("handleIncrementClick", [
      1
    ]), false) +
    ">+</button></div>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  }, marko_component);

marko_template.Widget = marko_widgets.w(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css",
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
