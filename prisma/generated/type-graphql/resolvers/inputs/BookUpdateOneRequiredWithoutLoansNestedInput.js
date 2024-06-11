"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateOneRequiredWithoutLoansNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateOrConnectWithoutLoansInput_1 = require("../inputs/BookCreateOrConnectWithoutLoansInput");
const BookCreateWithoutLoansInput_1 = require("../inputs/BookCreateWithoutLoansInput");
const BookUpdateToOneWithWhereWithoutLoansInput_1 = require("../inputs/BookUpdateToOneWithWhereWithoutLoansInput");
const BookUpsertWithoutLoansInput_1 = require("../inputs/BookUpsertWithoutLoansInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookUpdateOneRequiredWithoutLoansNestedInput = class BookUpdateOneRequiredWithoutLoansNestedInput {
};
exports.BookUpdateOneRequiredWithoutLoansNestedInput = BookUpdateOneRequiredWithoutLoansNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutLoansInput_1.BookCreateWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutLoansInput_1.BookCreateWithoutLoansInput)
], BookUpdateOneRequiredWithoutLoansNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateOrConnectWithoutLoansInput_1.BookCreateOrConnectWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateOrConnectWithoutLoansInput_1.BookCreateOrConnectWithoutLoansInput)
], BookUpdateOneRequiredWithoutLoansNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpsertWithoutLoansInput_1.BookUpsertWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpsertWithoutLoansInput_1.BookUpsertWithoutLoansInput)
], BookUpdateOneRequiredWithoutLoansNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookUpdateOneRequiredWithoutLoansNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateToOneWithWhereWithoutLoansInput_1.BookUpdateToOneWithWhereWithoutLoansInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpdateToOneWithWhereWithoutLoansInput_1.BookUpdateToOneWithWhereWithoutLoansInput)
], BookUpdateOneRequiredWithoutLoansNestedInput.prototype, "update", void 0);
exports.BookUpdateOneRequiredWithoutLoansNestedInput = BookUpdateOneRequiredWithoutLoansNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateOneRequiredWithoutLoansNestedInput", {})
], BookUpdateOneRequiredWithoutLoansNestedInput);
