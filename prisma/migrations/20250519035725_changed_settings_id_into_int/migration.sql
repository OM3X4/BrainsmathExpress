/*
  Warnings:

  - The primary key for the `core_settings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `core_settings` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_core_settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "theme" TEXT NOT NULL,
    "font" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "core_settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_core_settings" ("font", "id", "theme", "user_id") SELECT "font", "id", "theme", "user_id" FROM "core_settings";
DROP TABLE "core_settings";
ALTER TABLE "new_core_settings" RENAME TO "core_settings";
CREATE UNIQUE INDEX "core_settings_user_id_key" ON "core_settings"("user_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
