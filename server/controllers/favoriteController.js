// Import models
const { User, Favorite } = require("../models");

module.exports = {
  // Get all favorites
    getFavorite(req, res) {
        Favorite.find({})
        .then((favorite) => res.json(favorite))
        .catch((err) => res.status(500).json(err));
    },
    // get single favorite
    getSingleFavorite(req, res) {
        Favorite.findOne({ _id: req.params.favoriteId })
        .select("-__v")
        .then((favorite) =>
            !favorite
            ? res.status(404).json({ message: "No favorite found with this ID!" })
            : res.json(favorite)
        )
        .catch((err) => res.status(500).json(err));
    },
    //create a favorite and push the created favorite's _id to the associated user's favorites array field
    createFavorite(req, res) {
        Favorite.create(req.body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { favorites: _id } },
            { new: true }
            );
        })
        .then((favorite) =>
            !favorite
            ? res.status(404).json({ message: "No User found with this ID!" })
            : res.json(favorite)
        )
        .catch((err) => res.status(500).json(err));
    },
    //update a thought
    updateFavorite(req, res) {
        Favorite.findOneAndUpdate(
        { _id: req.params.favoriteId },
        { $set: req.body },
        { runValidators: true, New: true }
        )
        .then((user) =>
            !user
            ? res.status(404).json({ message: "No favorite found with this ID!" })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    //delete a thought
    deleteFavorite(req, res) {
        Favorite.findOneAndDelete({ _id: req.params.favoriteId })
        .then((favorite) =>
            !favorite
            ? res.status(404).json({ message: "No favorite found with this ID!" })
            : User.findOneAndUpdate(
                { favorites: req.params.thoughtId },
                { $pull: { favorites: req.params.favoriteId } },
                { new: true }
                )
        )
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'Favorite deleted, but no user found'})
            : res.json({ message: 'Favorite successfully deleted' })
        )
        .catch((err) => res.status(500).json(err));
    },
    
    };