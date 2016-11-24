
// const controller = controller

module.exports = (router) => {
  router.route('/')
    .get(controller.getMain);

  router.route('/read/:id')
    .get(controller.readFile);

return router

}

const controller = {
  getMain (req,res){
    res.send('hello');
  },

  readFile (req,res){
    res.send('You are reading posts' + req.params.id);
  }
}
