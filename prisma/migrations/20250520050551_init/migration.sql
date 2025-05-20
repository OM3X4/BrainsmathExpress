-- CreateTable
CREATE TABLE "auth_user" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "last_login" TIMESTAMP(3),
    "is_superuser" BOOLEAN DEFAULT false,
    "username" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "is_staff" BOOLEAN,
    "is_active" BOOLEAN,
    "date_joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "refreshToken" TEXT,
    "longest_streak" INTEGER NOT NULL DEFAULT 0,
    "current_streak" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "auth_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core_settings" (
    "id" SERIAL NOT NULL,
    "theme" TEXT NOT NULL,
    "font" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "core_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core_test" (
    "id" SERIAL NOT NULL,
    "qpm" DOUBLE PRECISION NOT NULL,
    "raw" DOUBLE PRECISION NOT NULL,
    "accuracy" INTEGER NOT NULL,
    "mode" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "core_test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_user_username_key" ON "auth_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "auth_user_email_key" ON "auth_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "core_settings_user_id_key" ON "core_settings"("user_id");

-- AddForeignKey
ALTER TABLE "core_settings" ADD CONSTRAINT "core_settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "core_test" ADD CONSTRAINT "core_test_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
