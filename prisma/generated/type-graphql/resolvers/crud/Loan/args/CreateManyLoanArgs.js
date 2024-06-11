"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLoanArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LoanCreateManyInput_1 = require("../../../inputs/LoanCreateManyInput");
let CreateManyLoanArgs = class CreateManyLoanArgs {
};
exports.CreateManyLoanArgs = CreateManyLoanArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LoanCreateManyInput_1.LoanCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyLoanArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyLoanArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyLoanArgs = CreateManyLoanArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyLoanArgs);
