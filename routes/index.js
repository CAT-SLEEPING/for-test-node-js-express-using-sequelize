var express = require('express');
var router = express.Router();

// join model
var Book = require('./book');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//localhost:3000/insert
router.get('/insert', (req, res) =>{
  res.render('insert',{data:{}})
})

router.post('/insert',(req, res) =>{
  Book.create(req.body);
  res.send('insert success');
})

router.get('/select',async (req, res) =>{
  var books = await Book.findAll();
  res.render('select', {books:books});
})

router.get('/edit/:id',async (req, res) =>{
  var books = await Book.findOne({
    where:{id:req.params.id}
  }); 
  res.render('insert',{data:book});
})

router.post('/edit/:id', (req, res) =>{
  //var data = req.body;
  //var condition = {where:{id:req.params.id}};
  //Bookupdate(data, condition);
  Book.update(req.body,{where:{id:req.params.id}});
  res.send('update success');
})

router.get('/delete/:id',(req, res) =>{
  Book.destroy({where:{id:req.params.id}});
  res.send('delete success');
})

module.exports = router;
