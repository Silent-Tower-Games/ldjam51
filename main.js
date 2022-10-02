define("utils/v2", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("boilerplate/Canvas", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Canvas = void 0;
    var Canvas = /** @class */ (function () {
        function Canvas(size) {
            this.size = size;
            // Lol using `as` is horrible but this is a game jam
            this.canvas = document.getElementById('c');
            this.resize();
        }
        Canvas.prototype.resize = function () {
            this.zoom = Math.min((window.innerWidth - 16) / this.size.x, (window.innerHeight - 16) / this.size.y);
            if (this.zoom > 1) {
                this.zoom = Math.floor(this.zoom);
            }
            this.canvas.width = this.size.x * this.zoom;
            this.canvas.height = this.size.y * this.zoom;
        };
        return Canvas;
    }());
    exports.Canvas = Canvas;
});
define("boilerplate/Input", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Input = exports.InputKeyState = void 0;
    var InputKeyState;
    (function (InputKeyState) {
        InputKeyState[InputKeyState["Up"] = 0] = "Up";
        InputKeyState[InputKeyState["Pressed"] = 1] = "Pressed";
        InputKeyState[InputKeyState["Down"] = 2] = "Down";
        InputKeyState[InputKeyState["Relesed"] = 3] = "Relesed";
    })(InputKeyState = exports.InputKeyState || (exports.InputKeyState = {}));
    ;
    var Input = /** @class */ (function () {
        function Input() {
            var _this = this;
            this.keys = {};
            this.states = {};
            var event = function (event) {
                var _a;
                var key = event.key.toLowerCase();
                var value = event.type === 'keydown'
                    ? (((_a = _this.keys[key]) !== null && _a !== void 0 ? _a : 1) + 1)
                    : 0;
                _this.keys[key] = value;
                console.log("".concat(key, " = ").concat(_this.keys[key]));
            };
            window.addEventListener('keydown', event);
            window.addEventListener('keyup', event);
        }
        Input.prototype.step = function () {
            var _a;
            // TODO: this doesn't do much yet
            for (var _i = 0, _b = Object.keys(this.keys); _i < _b.length; _i++) {
                var key = _b[_i];
                var state = ((_a = this.keys[key]) !== null && _a !== void 0 ? _a : 0)
                    ? InputKeyState.Down
                    : InputKeyState.Up;
                this.states[key] = state;
            }
        };
        return Input;
    }());
    exports.Input = Input;
});
define("game/IActionable", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("game/scenes/Scene", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Scene = void 0;
    var Scene = /** @class */ (function () {
        function Scene() {
        }
        Scene.prototype.step = function () {
            console.log('running');
        };
        Scene.prototype.draw = function () {
            console.log('drawing');
        };
        return Scene;
    }());
    exports.Scene = Scene;
});
define("App", ["require", "exports", "boilerplate/Canvas", "boilerplate/Input"], function (require, exports, Canvas_1, Input_1) {
    "use strict";
    exports.__esModule = true;
    exports.App = void 0;
    var App = /** @class */ (function () {
        function App() {
            var _this = this;
            this.scene = null;
            this.canvas = new Canvas_1.Canvas({ x: 320, y: 180 });
            this.input = new Input_1.Input();
            window.addEventListener('resize', function () {
                _this.canvas.resize();
            });
            setInterval(function () {
                var _a, _b;
                (_a = _this.scene) === null || _a === void 0 ? void 0 : _a.step();
                (_b = _this.scene) === null || _b === void 0 ? void 0 : _b.draw();
            }, 1000 / 60);
        }
        return App;
    }());
    exports.App = App;
});
define("main", ["require", "exports", "App"], function (require, exports, App_1) {
    "use strict";
    exports.__esModule = true;
    exports.u = exports.init = void 0;
    function init() {
        window.CurrentAppGameInstance = new App_1.App();
    }
    exports.init = init;
    function u() {
        return window.CurrentAppGameInstance;
    }
    exports.u = u;
});
