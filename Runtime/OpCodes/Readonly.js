﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CIL;
(function (CIL) {
    (function (Runtime) {
        (function (OpCodes) {
            "use strict";

            var Readonly = (function (_super) {
                __extends(Readonly, _super);
                function Readonly(memory, stack) {
                    _super.call(this, memory, stack);
                }
                Readonly.prototype.number = function () {
                    return 65054;
                };

                Readonly.prototype.argumentCount = function () {
                    return [4];
                };
                return Readonly;
            })(Runtime.OpCode);
            OpCodes.Readonly = Readonly;

            Runtime.OpCode.opCodes[Readonly.prototype.number()] = function (memory, stack) {
                Readonly.Instance = Readonly.Instance || new Readonly(memory, stack);
                return Readonly.Instance;
            };
        })(Runtime.OpCodes || (Runtime.OpCodes = {}));
        var OpCodes = Runtime.OpCodes;
    })(CIL.Runtime || (CIL.Runtime = {}));
    var Runtime = CIL.Runtime;
})(CIL || (CIL = {}));
//# sourceMappingURL=Readonly.js.map
