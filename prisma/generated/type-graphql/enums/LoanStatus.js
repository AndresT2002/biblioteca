"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LoanStatus;
(function (LoanStatus) {
    LoanStatus["PENDING"] = "PENDING";
    LoanStatus["RETURNED"] = "RETURNED";
})(LoanStatus || (exports.LoanStatus = LoanStatus = {}));
TypeGraphQL.registerEnumType(LoanStatus, {
    name: "LoanStatus",
    description: undefined,
});
