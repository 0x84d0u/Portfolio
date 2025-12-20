/*
  Warnings:

  - You are about to drop the `Work` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ProjectCategory" AS ENUM ('professional', 'personal', 'portfolio', 'other');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('upcoming', 'ongoing', 'completed');

-- DropTable
DROP TABLE "Work";

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "category" "ProjectCategory" NOT NULL,
    "status" "ProjectStatus" NOT NULL,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "links" JSONB,
    "content" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
