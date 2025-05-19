/*
  Warnings:

  - The primary key for the `core_test` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `core_test` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_core_test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qpm" REAL NOT NULL,
    "raw" REAL NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "mode" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "creation" DATETIME NOT NULL,
    "user_id" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    CONSTRAINT "core_test_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_core_test" ("accuracy", "creation", "difficulty", "id", "mode", "number", "qpm", "raw", "time", "user_id") SELECT "accuracy", "creation", "difficulty", "id", "mode", "number", "qpm", "raw", "time", "user_id" FROM "core_test";
DROP TABLE "core_test";
ALTER TABLE "new_core_test" RENAME TO "core_test";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
