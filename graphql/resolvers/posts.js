const Post = require('../../models/Post');

module.exports = {
    Query: {
        // sayHi: () => 'Hello world!!!!'
        async getPosts(){
            try{
                const posts = await Post.find();
                return posts;
            } catch(err){
                throw new Error(err);
            }
        },
        async getPost(_, { postId }){
            try{
                const post = await Post.findById(postId);
                if(post){
                    return post;
                } else {
                    throw new Error('Post not found')
                }
            } catch(err){
                throw new Error(err);
            }
        }
    }
}