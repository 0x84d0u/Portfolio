-- CreateEnum
CREATE TYPE "WorkLocation" AS ENUM ('wfh', 'wfo', 'hybrid');

-- CreateEnum
CREATE TYPE "WorkContract" AS ENUM ('full_time', 'part_time', 'freelance');

-- CreateTable
CREATE TABLE "Work" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "roles" TEXT[],
    "period" TEXT NOT NULL,
    "organisation" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "location" "WorkLocation" NOT NULL,
    "contract" "WorkContract" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);
