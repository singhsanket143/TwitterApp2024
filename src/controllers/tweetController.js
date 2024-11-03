export const getTweets = (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route'
    });
}

export const getTweetById = (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route',
        id: req.params.id
    });
}

export const createTweet = (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route',
        body: req.body
    });
}