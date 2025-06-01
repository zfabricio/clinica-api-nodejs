import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

export class ReceitaMedica extends Model {}

ReceitaMedica.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descricaoMedicamento: { type: DataTypes.STRING, allowNull: false },
  tempoTratamento: { type: DataTypes.STRING, allowNull: false },
  dosagem: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize,
  modelName: 'ReceitaMedica'
});
