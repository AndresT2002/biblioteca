"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LoanCountAggregate = class LoanCountAggregate {
};
exports.LoanCountAggregate = LoanCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LoanCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LoanCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LoanCountAggregate.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LoanCountAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LoanCountAggregate.prototype, "_all", void 0);
exports.LoanCountAggregate = LoanCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LoanCountAggregate", {})
], LoanCountAggregate);
