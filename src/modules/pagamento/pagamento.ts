import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

export class Pagamento extends Model {}

Pagamento.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  valor: { type: DataTypes.FLOAT, allowNull: false },
  data: { type: DataTypes.DATE, allowNull: false }
}, {
  sequelize,
  modelName: 'Pagamento'
});
