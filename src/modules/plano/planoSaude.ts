import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

export class PlanoSaude extends Model {}

PlanoSaude.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  limiteCobertura: { type: DataTypes.FLOAT, allowNull: false },
  dataVencimento: { type: DataTypes.DATE, allowNull: false }
}, {
  sequelize,
  modelName: 'PlanoSaude'
});
