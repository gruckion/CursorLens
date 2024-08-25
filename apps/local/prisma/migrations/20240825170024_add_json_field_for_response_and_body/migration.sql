/*
  Warnings:

  - Changed the type of `body` on the `Log` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `response` on the `Log` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "body",
ADD COLUMN     "body" JSONB NOT NULL,
DROP COLUMN "response",
ADD COLUMN     "response" JSONB NOT NULL;
