-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_auth_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "password" TEXT NOT NULL,
    "last_login" DATETIME,
    "is_superuser" BOOLEAN DEFAULT false,
    "username" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "is_staff" BOOLEAN,
    "is_active" BOOLEAN,
    "date_joined" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_auth_user" ("date_joined", "email", "first_name", "id", "is_active", "is_staff", "is_superuser", "last_login", "last_name", "password", "username") SELECT "date_joined", "email", "first_name", "id", "is_active", "is_staff", "is_superuser", "last_login", "last_name", "password", "username" FROM "auth_user";
DROP TABLE "auth_user";
ALTER TABLE "new_auth_user" RENAME TO "auth_user";
CREATE UNIQUE INDEX "auth_user_username_key" ON "auth_user"("username");
CREATE UNIQUE INDEX "auth_user_email_key" ON "auth_user"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
