import Compte from '../models/compte.model.js';

export const getAllAccounts = async (req, res, next) => {
    try {
      // Utilisation de la méthode findAll de Sequelize pour récupérer toutes les comptes
      const comptes = await Compte.findAll();
      // Envoie des données récupérées au comptes avec le statut 200 (OK)
      res.status(200).json(comptes);
    } catch (error) {
      // En cas d'erreur, passe l'erreur au middleware suivant
      next(error);
    }
  };


  // Récupération d'un compte par son numero
export const getAccount = async (req, res, next) => {
    try {
      // Recherche d'un compte par son numero (Primary Key) avec findByPk
      const compte = await Compte.findByPk(req.params.numero);
      if (compte) {
        // Si le compte est trouvée, envoie la tâche au client
        res.status(200).json(compte);
      } else {
        // Si le compte n'est pas trouvée, envoie un message d'erreur 404 (Not Found)
        res.status(404).json({ numero: null,typeCompte: null,solde:0,devise:null,image:null });
      }
    } catch (error) {
      next(error);
    }
  };

  // Suppression d'un compte
export const closeAccount = async (req, res, next) => {
    try {
      // Recherche d'un compte par son numero
      const compte = await Compte.findByPk(req.params.numero);
      if (compte) {
        //garder le numero du compte  
        const compteSupprimer = compte.numero;
        // Si le compte est trouvée, le supprimer
        await compte.destroy();
        // Envoie un message de confirmation de suppression
        res.status(200).json({ message: `Opération réussie - Compte ${compteSupprimer} supprimé` });
      } else {
        // Si le compte n'est pas trouvée, envoie un message d'erreur 404
        res.status(404).json({ message: 'Compte non trouvée' });
      }
    } catch (error) {
      next(error);
    }
  };
  


  


