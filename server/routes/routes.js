module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {'title': 'Fancy Homepage'}); //Dette indlæser ejs filen
   });

   app.get('/product', (req, res, next) => {
      res.render('product');
   });
   
   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });
};
