import sequelize from '../config/database';
import { Paciente } from "../modules/paciente/paciente";
import { Medico } from "../modules/medico/medico";
import { Consulta } from "../modules/consulta/consulta";
import { Pagamento } from "../modules/pagamento/pagamento";
import { ReceitaMedica } from "../modules/receita/ReceitaMedica";
import { PlanoSaude } from "../modules/plano/planoSaude";

Paciente.belongsTo(PlanoSaude);
PlanoSaude.hasMany(Paciente);

Consulta.belongsTo(Paciente);
Paciente.hasMany(Consulta);

Consulta.belongsTo(Medico);
Medico.hasMany(Consulta);

ReceitaMedica.belongsTo(Consulta);
Consulta.hasOne(ReceitaMedica);

Pagamento.belongsTo(Consulta);
Consulta.hasMany(Pagamento);

export {
    sequelize,
    Paciente,
    PlanoSaude,
    Medico,
    Consulta,
    ReceitaMedica,
    Pagamento,
};
