import * as Express from 'express';
import expressListEndpoints from 'express-list-endpoints';
import article from './routes/article';
import auth from './routes/auth';
import user from './routes/user';
import dev from './routes/dev';

const app = Express();

app.use('/article', article);
app.use('/auth', auth);
app.use('/user', user);
app.use('/dev', dev);

app.listen(3000, () => {
    console.log('Listen started at port 3000.');
    console.log(expressListEndpoints(app));
});

export default app;
