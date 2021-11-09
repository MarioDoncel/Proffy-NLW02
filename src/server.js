import express from 'express'
import path from 'path';
import nunjucks from 'nunjucks'
import { pageGiveClasses, pageIndex, pageStudy,saveClasses } from './pages.js';

const app = express()
const __dirname = path.resolve();

nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

app.use(express.urlencoded({extended:true})) // Habilitando REQ.BODY
app.use(express.static(path.join(__dirname, 'public')));

// GET Routes
app.get('/', pageIndex)
app.get('/study', pageStudy)
app.get('/give-classes', pageGiveClasses)

// POST Routes
app.post('/give-classes', saveClasses)


app.listen(5500, () => console.log('Server is Running! Yeah!'))

