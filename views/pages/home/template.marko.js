// Compiled using marko@4.0.0-rc.18 - DO NOT EDIT
var marko_template = module.exports = require("marko/html").t(__filename),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    default_template = marko_loadTemplate(require.resolve("../../layouts/default")),
    __browser_json = require.resolve("./browser.json"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("lasso/taglib/config-tag")),
    group_section_search_template = marko_loadTemplate(require.resolve("../../components/group-section-search")),
    group_section_search_tag = marko_loadTag(group_section_search_template),
    comp_banner_full_line_template = marko_loadTemplate(require.resolve("../../components/comp-banner-full-line")),
    comp_banner_full_line_tag = marko_loadTag(comp_banner_full_line_template),
    app_products_lines_template = marko_loadTemplate(require.resolve("../../components/app-products-lines")),
    app_products_lines_tag = marko_loadTag(app_products_lines_template),
    app_white_popular_template = marko_loadTemplate(require.resolve("../../components/app-white-popular")),
    app_white_popular_tag = marko_loadTag(app_white_popular_template),
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  lasso_page_tag({
      packagePath: __browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  include_tag({
      _target: default_template,
      url: data.url,
      title: {
          renderBody: function renderBody(out) {
            out.w("Be Health - Compare e compre manipulados no único comparador de preços do Brasil. Seguro. Rápido. Prático e sempre pelo menor preço!");
          }
        },
      body: {
          renderBody: function renderBody(out) {
            group_section_search_tag({}, out);

            comp_banner_full_line_tag({}, out);

            app_products_lines_tag({}, out);

            app_white_popular_tag({}, out);
          }
        }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../../layouts/default",
      "lasso/taglib/config-tag",
      "../../components/group-section-search",
      "../../components/comp-banner-full-line",
      "../../components/app-products-lines",
      "../../components/app-white-popular",
      "marko/taglibs/core/include-tag"
    ]
  };
