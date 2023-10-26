/*
  Warnings:

  - Added the required column `language` to the `Snippet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Snippet" ADD COLUMN     "language" TEXT NOT NULL;
