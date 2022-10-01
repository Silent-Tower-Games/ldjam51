define("output", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.output = void 0;
    exports.output = 'Lol';
});
define("main", ["require", "exports", "output"], function (require, exports, output_1) {
    "use strict";
    exports.__esModule = true;
    exports.App = void 0;
    var App = /** @class */ (function () {
        function App() {
            console.log(output_1.output);
        }
        return App;
    }());
    exports.App = App;
});
