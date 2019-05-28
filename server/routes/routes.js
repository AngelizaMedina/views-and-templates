module.exports = (app) => {

   app.get('/', (req, res, next) => {
      res.render('home', {
         'title': 'Home - Skullcandy',
         'page': 'home'
      }); //This loads the .ejs document

      console.log("Something"); //Gets logged in our terminal
   });

   app.get('/product', (req, res, next) => {
      res.render('product', {
         'title': 'Product - Skullcandy',
         'page': 'product'
      });
   });
   
   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         'title': 'Contact - Skullcandy',
         'page': 'contact'
      });
   });

   app.get('/test', (req, res, next) => {
      console.log("Test");
      res.send();
   });

}; //module.exports end
