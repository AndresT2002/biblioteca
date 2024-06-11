"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LoanScalarFieldEnum;
(function (LoanScalarFieldEnum) {
    LoanScalarFieldEnum["id"] = "id";
    LoanScalarFieldEnum["userId"] = "userId";
    LoanScalarFieldEnum["bookId"] = "bookId";
    LoanScalarFieldEnum["status"] = "status";
})(LoanScalarFieldEnum || (exports.LoanScalarFieldEnum = LoanScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LoanScalarFieldEnum, {
    name: "LoanScalarFieldEnum",
    description: undefined,
});
