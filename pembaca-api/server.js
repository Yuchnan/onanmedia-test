const express = require("express")
const { PrismaClient } = require("@prisma/client")
const cors = require("cors")
const { z } = require("zod")

const prisma = new PrismaClient()
const app = express()
app.use(cors())
app.use(express.json())

const validTags = ["tips", "bisnis", "desain", "teknologi", "medsos", "dm", "penulisan", "gaya"]

const pembacaSchema = z.object({
    judul: z.string().min(1, "Judul harus ada"),
    gambar: z.string().url("URL gambar tidak valid"),
    deskripsi: z.string().min(1, "Deskripsi harus ada"),
    tag: z.array(z.enum(validTags)).min(1, "Tag harus ada setidaknya satu"),
    trending: z.boolean(),
});

app.get("/pembaca", async (req, res) => {
    try {
        const pembacaList = await prisma.pembaca.findMany()
        res.json(pembacaList)
    } catch (error) {
        console.error("Error fetching pembaca:", error)
        res.status(500).json({ error: "Koneksi gagal" })
    }
});

app.get("/pembaca/:id", async (req, res) => {
    const { id } = req.params
    try {
        const pembaca = await prisma.pembaca.findUnique({
            where: { id: parseInt(id) },
        });
        if (!pembaca) {
            return res.status(404).json({ error: "Pembaca tidak ditemukan" })
        }
        res.json(pembaca)
    } catch (error) {
        console.error("Error fetching pembaca:", error)
        res.status(500).json({ error: "Koneksi gagal" })
    }
});

app.post("/pembaca", async (req, res) => {
    try {
        const validatedData = pembacaSchema.parse(req.body)
        const newPembaca = await prisma.pembaca.create({
            data: validatedData,
        });
        res.status(201).json(newPembaca)
    } catch (error) {
        console.error("Error creating pembaca:", error)
        if (error instanceof z.ZodError) {
            return res.status(400).json({ errors: error.errors })
        }
        res.status(500).json({ error: "Koneksi gagal" })
    }
});

app.put("/pembaca/:id", async (req, res) => {
    const { id } = req.params
    try {
        const validatedData = pembacaSchema.parse(req.body)
        const updatedPembaca = await prisma.pembaca.update({
            where: { id: parseInt(id) },
            data: validatedData,
        });
        res.json(updatedPembaca)
    } catch (error) {
        console.error("Error updating pembaca:", error)
        if (error instanceof z.ZodError) {
            return res.status(400).json({ errors: error.errors })
        }
        res.status(500).json({ error: "Koneksi gagal" })
    }
});

app.delete("/pembaca/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.pembaca.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting pembaca:", error);
        res.status(500).json({ error: "Koneksi gagal" });
    }
});

app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
});
