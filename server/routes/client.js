import { Router } from 'express';
const router = Router();
import { getAllClients } from '../services/client.service';

router.get('/', function (req, res, next) { res.send('CLIENT') });
router.get('/all', getAllClients);

export default router;