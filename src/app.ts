import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import pacienteRoutes from "./modules/paciente/pacienteRoutes";
import medicoRoutes from "./modules/medico/medicoRoutes";
import consultaRoutes from "./modules/consulta/consultaRoutes";
import receitaRoutes from "./modules/receita/receitaRoutes";
import pagamentoRoutes from "./modules/pagamento/pagamentoRoutes";
import planoRoutes from "./modules/plano/planoRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rotas
app.use("/pacientes", pacienteRoutes);
app.use("/medicos", medicoRoutes);
app.use("/consultas", consultaRoutes);
app.use("/receitas", receitaRoutes);
app.use("/pagamentos", pagamentoRoutes);
app.use("/planos", planoRoutes);

app.get('/', (_req, res) => {
    res.send('API Clínica funcionando!');
});

// Sync database
sequelize.sync({ alter: true }).then(() => {
    console.log('🟢 Banco sincronizado');
    app.listen(port, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Erro na conexão com o banco:', err);
});
