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
    "creation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
