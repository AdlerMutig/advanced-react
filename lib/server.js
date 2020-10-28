import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`); //Added because course materian wasnt working

app.get('/', (req, res) => {
    res.render('index', {answer:42});
});

app.listen(config.port, () => {
    console.info(`Running on ${config.port}...`);
});
