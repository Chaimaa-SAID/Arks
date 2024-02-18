const fs = require('fs');

class Post {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}

function getAllPosts() {
    const posts = JSON.parse(fs.readFileSync('posts.json', 'utf-8'));
    return posts;
}

function getNextId() {
    const posts = getAllPosts();
    return posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
}

function createPost(postData) {
    const id = getNextId();
    const newPost = new Post(id, postData.title, postData.content);
    const posts = getAllPosts();
    posts.push(newPost);
    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
    return newPost;
}

function getPostById(id) {
    const posts = getAllPosts();
    return posts.find(post => post.id === id);
}

function updatePost(id, updatedData) {
    const posts = getAllPosts();
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex !== -1) {
        posts[postIndex].title = updatedData.title;
        posts[postIndex].content = updatedData.content;
        fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
        return posts[postIndex];
    }
    return null;
}

function deletePost(id) {
    let posts = getAllPosts();
    posts = posts.filter(post => post.id !== id);
    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
}

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost
};
