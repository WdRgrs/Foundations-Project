const {response} = require('express');
const comments = require('./db.json');

let commentId = 2;

module.exports = {
    getComments: function(req, res) {
        res.status(200).send(comments);
    },

    createComments: function(req, res) {
        const { words } = req.body;
        
        const newComment = {
            commentId,
            words
        }
        
        comments.push(newComment);
        commentId++;
        
        res.status(200).send(comments);
    },

    deleteComments: function(req, res) {
        console.log(req.params.commentId)
    
        const tgtIndex = comments.findIndex(function(commentObj) {
            return commentObj.id === +req.params.commentId;
        });
    
        console.log(tgtIndex);
    
        comments.splice(tgtIndex, 1);
        res.status(200).send(comments);
    }
}