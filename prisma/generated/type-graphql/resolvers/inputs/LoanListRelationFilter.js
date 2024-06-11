"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanWhereInput_1 = require("../inputs/LoanWhereInput");
let LoanListRelationFilter = class LoanListRelationFilter {
};
exports.LoanListRelationFilter = LoanListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereInput_1.LoanWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereInput_1.LoanWhereInput)
], LoanListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereInput_1.LoanWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereInput_1.LoanWhereInput)
], LoanListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LoanWhereInput_1.LoanWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LoanWhereInput_1.LoanWhereInput)
], LoanListRelationFilter.prototype, "none", void 0);
exports.LoanListRelationFilter = LoanListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("LoanListRelationFilter", {})
], LoanListRelationFilter);
