import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Medico extends Model {}

Medico.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  especialidade: { type: DataTypes.STRING, allowNull: false },
  crm: { type: DataTypes.STRING, allowNull: false, unique: true }
}, {
  sequelize,
  modelName: 'Medico'
});
