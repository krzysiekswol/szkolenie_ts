"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const switched = rxjs_1.of(1, 2, 3).pipe(operators_1.map((x) => rxjs_1.of(x, x * 2, x * 3)));
switched.subscribe((x) => console.log(x));
//# sourceMappingURL=index.js.map