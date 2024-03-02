const express = require('express');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const postController = require('./controllers/postController');
const { validateJWT } = require('./middlewares');
const upload = require('./middlewares/upload');

const router = express.Router();

router.post('/user', userController.newUser);
router.get('/user', validateJWT(false), userController.listUser);
router.get('/user/:id', validateJWT(false), userController.listSingleUser);
router.delete('/user/me', validateJWT(false), userController.deleteUser);

router.post('/login', loginController.newLogin);

router.post('/post', validateJWT(false), upload.single("glbFile"), postController.newPost);
router.get('/post', validateJWT(true), postController.getPosts);
router.get('/post/user', validateJWT(false), postController.getPostsByUser); // Protected route
router.get('/post/search', validateJWT(false), postController.serachPostByTerm);
router.get('/post/:id', validateJWT(false), postController.getPost);
router.put('/post/:id', validateJWT(false), postController.editPost);
router.delete('/post/:id', validateJWT(false), postController.deletePost);
router.get('/post/view/:filename', (req, res) => {
  const filename = req.params.filename; // Get the filename from the URL parameter
  res.render('model_viewer', { filename }); // Render the EJS template dynamically
});

module.exports = router;
