const { User, Thought } = require("../models");

module.exports = {
  //Get all users
    getUser(req, res) {
        User.find({})
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    //Get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .populate("")
        .populate("")
        .select("-__v")
        .then((user) =>
            !user
            ? res.status(404).json({ message: "No User found with that ID!" })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    //create a user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    //update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
        )
        .then((user) =>
            !user
            ? res.status(404).json({ message: "No User found with this ID!" })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    //delete a user
    //Remove a user's thoughts when deleted, when user is deleted
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
            !user
            ? res.status(404).json({ message: "No User found with this ID!" })
            : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() => res.json({ message: "User and Thought deleted!" }))
        .catch((err) => res.status(500).json(err));
    },
    
    };