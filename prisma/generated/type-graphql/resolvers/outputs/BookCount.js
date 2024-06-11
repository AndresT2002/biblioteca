"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCountLoansArgs_1 = require("./args/BookCountLoansArgs");
let BookCount = class BookCount {
    getLoans(root, args) {
        return root.loans;
    }
};
exports.BookCount = BookCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "loans",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookCount, BookCountLoansArgs_1.BookCountLoansArgs]),
    tslib_1.__metadata("design:returntype", Number)
], BookCount.prototype, "getLoans", null);
exports.BookCount = BookCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookCount", {})
], BookCount);
