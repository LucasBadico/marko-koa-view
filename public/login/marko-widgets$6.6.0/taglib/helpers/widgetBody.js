$_mod.def("/marko-widgets$6.6.0/taglib/helpers/widgetBody", function(require, exports, module, __filename, __dirname) { /*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var markoWidgets = require('/marko-widgets$6.6.0/lib/index-browser'/*'../../'*/);
var escapeXml = require('/raptor-util$2.0.0/escapeXml'/*'raptor-util/escapeXml'*/);
var isBrowser = typeof window !== 'undefined';

module.exports = function widgetBody(out, id, content, widget) {
    if (id != null && content == null) {
        if (isBrowser) {
            // There is no body content so let's see if we should reuse
            // the existing body content in the DOM
            var existingEl = document.getElementById(id);
            if (existingEl) {
                var widgetsContext = markoWidgets.getWidgetsContext(out);
                widgetsContext.addPreservedDOMNode(existingEl, true /* body only */);
            }
        }
    } else if (typeof content === 'function') {
        content(out, widget);
    } else {
        if (typeof content === 'string') {
            content = escapeXml(content);
        }
        out.write(content);
    }
};
});