const router = require('express').Router();
let Player =  require('C:\Users\caleb\OneDrive\Documents\GitHub\BetterValStats\bettervalstats\backend\models\player.model');

router.route('/player').get((req, res => {
    Player.find().then(users => res.json(users))
                 .catch(err => res.statusCode(400).json('Error: ' +err));
}));