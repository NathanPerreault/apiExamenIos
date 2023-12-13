import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Compte = sequelize.define('Compte', {
    numero: {
        type: DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false
    },
    typeCompte: {
        type: DataTypes.ENUM('Cheque', 'Epargne', 'CELI'),
        allowNull: false
    },
    solde: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    devise: {
        type: DataTypes.ENUM('CAD', 'USD', 'EUR'),
        allowNull: false
    },
 
    image: {
        type: DataTypes.STRING(50),
        allowNull: false
    }



  }, {
    timestamps: false, 
  });
  
  
  export default Compte;