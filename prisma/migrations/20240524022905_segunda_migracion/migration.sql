/*
  Warnings:

  - You are about to drop the `InventoryMovement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Material` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LoanStatus" AS ENUM ('PENDING', 'RETURNED');

-- DropForeignKey
ALTER TABLE "InventoryMovement" DROP CONSTRAINT "InventoryMovement_materialId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryMovement" DROP CONSTRAINT "InventoryMovement_userId_fkey";

-- DropForeignKey
ALTER TABLE "Material" DROP CONSTRAINT "Material_userId_fkey";

-- DropTable
DROP TABLE "InventoryMovement";

-- DropTable
DROP TABLE "Material";

-- DropEnum
DROP TYPE "Enum_MovementType";

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "status" "LoanStatus" NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "quantityAvaiable" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
