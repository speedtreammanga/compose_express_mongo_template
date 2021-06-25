import express from 'express';
import * as Middleware from '../middleware/middleware';
import * as Routes from '../../routes';
import config from '../config'

/**
 * @constant {express.Application}
 */
const app: express.Application = express();

/** 
 * @constructs express.Application Middleware
 */
Middleware.configure(app);

/**
 * @constructs express.Application Routes
 */
Routes.init(app);

/**
 * @constructs express.Application Error Handler
 */
Middleware.initErrorHandler(app);

/**
 * sets port 8080 to default or unless otherwise specified in the environment
 */

app.set('port', config.node.port || 8080);

/**
 * sets secret to 'superSecret', otherwise specified in the environment
 */
app.set('secret', config.node.secret);

/**
 * @exports {express.Application}
 */
export default app;