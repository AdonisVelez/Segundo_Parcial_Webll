/*
  Warnings:

  - You are about to drop the column `estado` on the `encuesta` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `persona` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `registro` table. All the data in the column will be lost.
  - Changed the type of `identificacion` on the `persona` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "encuesta" DROP COLUMN "estado";

-- AlterTable
ALTER TABLE "persona" DROP COLUMN "estado",
DROP COLUMN "identificacion",
ADD COLUMN     "identificacion" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "registro" DROP COLUMN "estado";

-- DropEnum
DROP TYPE "estado";
