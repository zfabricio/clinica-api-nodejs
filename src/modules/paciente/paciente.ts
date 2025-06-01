import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Paciente extends Model {}

Paciente.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
  endereco: { type: DataTypes.STRING, allowNull: false },
  dataNascimento: { type: DataTypes.DATE, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize,
  modelName: 'Paciente'
});
