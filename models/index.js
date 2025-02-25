// import models

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.hasMany(Post, { onDelete: 'CASCADE' })
Post.belongsTo(User)
User.hasMany(Comment, { onDelete: 'CASCADE' })
Comment.belongsTo(Post)
Post.hasMany(Comment, { onDelete: 'CASCADE' })
Comment.belongsTo(User)


module.exports = { User, Post, Comment }