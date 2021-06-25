  
import { Router } from 'express';
import { BookComponent } from '../components'

const router: Router = Router();

router.get('/', BookComponent.findAll);
router.post('/', BookComponent.create);
router.get('/:id', BookComponent.findOne);
router.delete('/:id', BookComponent.remove);

/**
 * @export {express.Router}
 */
export default router;