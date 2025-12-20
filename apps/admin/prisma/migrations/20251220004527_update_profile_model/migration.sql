/*
  Warnings:

  - You are about to drop the column `emails` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `phones` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "emails",
DROP COLUMN "phones",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "phone" TEXT,
ALTER COLUMN "githubUsername" DROP NOT NULL,
ALTER COLUMN "linkedinUsername" DROP NOT NULL,
ALTER COLUMN "websiteLink" DROP NOT NULL;
