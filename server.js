// Importa a biblioteca Express (o módulo principal)
import express from "express";

// Cria uma instância da aplicação Express e a atribui à constante 'app'
const app = express();

app.listen(3000, ()=>{
    console.log("Servidor escutando... http://localhost:3000");
});


app.get("/", (req, res) =>{
    res.status(200).send("Boas Vindas à Imersão Dev da Alura");
});