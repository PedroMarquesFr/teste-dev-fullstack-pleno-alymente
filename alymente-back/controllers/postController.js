const postService = require('../services/postService');
const uploadFileMiddleware = require('../middlewares/upload');

const newPost = async (req, res) => {
  console.log('CHEGOU', req.file);
  const { id } = req.user;
  const { originalname: name, size, key, location: url } = req.file;
  const postOrError = await postService.newPost(id, name, size, key, url);
  res.status(postOrError.message ? postOrError.code : 201).json(postOrError);
};

const getPosts = async (req, res) => {
  const { id } = req.user;
  const allPosts = await postService.getPosts(id);
  res.status(allPosts.message ? allPosts.code : 200).json(allPosts);
};
const getPostsByUser = async (req, res) => {
  const { id } = req.user;
  const allPosts = await postService.getPostsByUser(id);
  res.status(allPosts.message ? allPosts.code : 200).json(allPosts);
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  res.status(post.message ? post.code : 200).json(post);
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;
  const post = await postService.editPostById(id, userId, title, content);
  res.status(post.message ? post.code : 200).json(post);
};

const serachPostByTerm = async (req, res) => {
  const { q } = req.query;
  const posts = await postService.searchPostByTerm(q);
  res.status(posts.message ? posts.code : 200).json(posts);
};

const deletePost = async (req, res) => {
  const { id: idFromParams } = req.params;
  const { id: idFromJWT } = req.user;
  const postsDeleted = await postService.deletePost(idFromParams, idFromJWT);
  res.status(postsDeleted.message ? postsDeleted.code : 204).json(postsDeleted);
};

module.exports = {
  newPost,
  getPosts,
  getPost,
  getPostsByUser,
  editPost,
  serachPostByTerm,
  deletePost,
};
