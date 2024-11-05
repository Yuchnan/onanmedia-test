-- CreateTable
CREATE TABLE "Pembaca" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "trending" BOOLEAN NOT NULL,

    CONSTRAINT "Pembaca_pkey" PRIMARY KEY ("id")
);
