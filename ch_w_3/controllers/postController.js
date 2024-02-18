const postModel = require('../models/post');

function getAllPosts(req, res) {
    const posts = postModel.getAllPosts();
    res.json(posts);
}

function getPostById(req, res) {
    const postId = parseInt(req.params.id);
    const post = postModel.getPostById(postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post non trouvé');
    }
}

function createPost(req, res) {
    const newPost = postModel.createPost(req.body);
    res.json(newPost);
}

function updatePost(req, res) {
    const postId = parseInt(req.params.id);
    const updatedPost = postModel.updatePost(postId, req.body);
    if (updatedPost) {
        res.json(updatedPost);
    } else {
        res.status(404).send('Post non trouvé');
    }
}

function deletePost(req, res) {
    const postId = parseInt(req.params.id);
    postModel.deletePost(postId);
    res.send('Post supprimé avec succès');
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
