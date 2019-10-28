import { Router } from 'express';
const router = Router();

router.get('/', function(req, res, next){res.send('USER')});

export default router;