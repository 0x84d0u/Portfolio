/*
  Warnings:

  - You are about to drop the `Education` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ExperienceType" AS ENUM ('work', 'education', 'certificate');

-- DropTable
DROP TABLE "Education";

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "type" "ExperienceType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "roles" TEXT[],
    "period" TEXT,
    "organisation" TEXT,
    "address" TEXT,
    "location" "WorkLocation",
    "contract" "WorkContract",
    "authLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);
