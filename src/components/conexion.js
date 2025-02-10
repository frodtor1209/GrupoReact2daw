import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "colegioreact",
});

conexion.connect((err) => {
    if (err) {
        console.error("Error de conexión:", err);
        return;
    }
    console.log("Conectado a MySQL");
});

app.get("/estudiantes", (req, res) => {
    conexion.query("SELECT * FROM estudiantes", (err, resultados) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(resultados);
    });
});

app.get("/profesores", (req, res) => {
    conexion.query("SELECT * FROM profesores", (err, resultados) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(resultados);
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
