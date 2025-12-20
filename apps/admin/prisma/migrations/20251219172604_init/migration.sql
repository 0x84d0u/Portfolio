-- CreateEnum
CREATE TYPE "WorkLocation" AS ENUM ('wfh', 'wfo', 'hybrid');

-- CreateEnum
CREATE TYPE "WorkContract" AS ENUM ('full_time', 'part_time', 'freelance');

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "availability" BOOLEAN NOT NULL DEFAULT true,
    "githubUsername" TEXT NOT NULL,
    "linkedinUsername" TEXT NOT NULL,
    "websiteLink" TEXT NOT NULL,
    "emails" TEXT[],
    "phones" TEXT[],
    "headlines" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");
