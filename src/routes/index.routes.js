import { Router } from 'express' //rutas para ir  a las diferentes pag
//trae las funciones creadas para manejar los datos 
import {
crearPost,
deletePost,
editarCurriculum,
estadoPost,
postRenderEdit,
renderPostulacion

} from '../controllers/controllers.js';

const router = Router();

router.get('/', renderPostulacion);

router.post('/post/add', crearPost);

router.get('/edit/:id', postRenderEdit);

router.post('/edit/:id', editarCurriculum);

router.get('/delete/:id', deletePost);

router.get('/toggleDone/:id', estadoPost);

export default router;
