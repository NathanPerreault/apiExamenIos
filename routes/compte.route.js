import { Router } from 'express';

import { 
    getAccount,
    getAllAccounts,
    closeAccount,

 } from '../controllers/compte.controller.js';

 const router = Router();

 router.get('/',getAllAccounts);
 router.get('/:numero',getAccount);
 router.delete('/:numero',closeAccount);

 export default router;