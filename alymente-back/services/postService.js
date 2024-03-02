const { Op } = require('sequelize');
const { Posts, Users } = require('../models');
const errMessage = require('./errMessage');

const validateCamps = (name, size, key) => {
  if (!name) return errMessage('"name" is required', 400);
  if (!size) return errMessage('"size" is required', 400);
  if (!key) return errMessage('"key" is required', 400);
  return { ok: 'ok' };
};

const newPost = async (userId, name, size, key, url) => {
  console.log(":)", url)
  const areCampsValid = validateCamps(name, size, key);
  if (areCampsValid.message) return areCampsValid;
  try {
    const wasCreated = await Posts.create({
      name,
      size,
      key,
      url,
      // url: `http://localhost:${process.env.PORT}/post/view/${key}`,
      userId,
    });
    return wasCreated;
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const getPosts = async () => {
  try {
    const allPosts = await Posts.findAll({
      include: [{ model: Users, as: 'user' }],
    });
    return allPosts;
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const getPostsByUser = async (userId) => {
  try {
    const allPosts = await Posts.findAll({
      where: { userId },
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      ],
      order: [['updated', 'DESC']]
    });
    return allPosts;
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const getPostById = async (id) => {
  try {
    const post = await Posts.findOne({
      where: { id },
      include: [{ model: Users, as: 'user' }],
    });
    if (!post) return errMessage('Post não existe', 404);
    return post;
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const editPostById = async (id, userId, title, content) => {
  const areCampsValid = validateCamps(title, content);
  if (areCampsValid.message) return areCampsValid;
  const selectedPost = await Posts.findOne({ where: { id } });
  if (!selectedPost) return errMessage('Post nao existe', 404);
  if (selectedPost.userId !== userId)
    return errMessage('Usuário não autorizado', 401);
  try {
    const updatedPost = await Posts.update(
      {
        title,
        content,
      },
      {
        where: { id },
      }
    );
    console.log(updatedPost);
    return { title, content, userId, editado: updatedPost[0] };
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const searchPostByTerm = async (term) => {
  console.log(term);
  if (term === '') {
    const allPosts = await getPosts();
    return allPosts;
  }
  try {
    const doesPostsExists = await Posts.findAll({
      where: { [Op.or]: [{ name: term }, { key: term }] },
      include: [{ model: Users, as: 'user' }],
    });
    return doesPostsExists;
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

const deletePost = async (idFromPost, idFromJWT) => {
  try {
    const post = await getPostById(idFromPost);
    if (post.message) return post;
    if (idFromJWT !== post.user.id)
      return errMessage('Usuário não autorizado', 401);
    const deletedPost = await Posts.destroy({ where: { id: idFromPost } });
    return deletedPost;
  } catch (error) {
    console.error(error);
    return errMessage('Erro interno', 500);
  }
};

module.exports = {
  newPost,
  getPosts,
  getPostsByUser,
  getPostById,
  editPostById,
  searchPostByTerm,
  deletePost,
};
