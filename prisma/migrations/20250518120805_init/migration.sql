-- CreateTable
CREATE TABLE "auth_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "password" TEXT NOT NULL,
    "last_login" DATETIME,
    "is_superuser" BOOLEAN NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "is_staff" BOOLEAN NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "date_joined" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "core_settings" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "theme" TEXT NOT NULL,
    "font" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "core_settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "core_test" (
    "id" BIGINT NOT NULL PRIMARY KEY,
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

-- CreateIndex
CREATE UNIQUE INDEX "auth_user_username_key" ON "auth_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "core_settings_user_id_key" ON "core_settings"("user_id");
