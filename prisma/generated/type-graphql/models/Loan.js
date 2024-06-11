"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanStatus_1 = require("../enums/LoanStatus");
let Loan = class Loan {
};
exports.Loan = Loan;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Loan.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Loan.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Loan.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanStatus_1.LoanStatus, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Loan.prototype, "status", void 0);
exports.Loan = Loan = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Loan", {})
], Loan);
