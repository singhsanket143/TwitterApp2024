import {mockRequest, mockResponse} from "./mocker.js";
import { getTweets } from "../src/controllers/tweetController.js";
import tweetService from "../src/services/tweetService.js";

jest.mock('../src/services/tweetService.js', () => ({

    getTweets: jest.fn().mockResolvedValue([
        {
            content: 'Tweet 1'
        },
        {
            content: 'Tweet 2'
        }
    ])
}));

test('should return tweets', async() => {

    const req = mockRequest();
    const res = mockResponse();
    

    const response = [
        {
            content: 'Tweet 1'
        },
        {
            content: 'Tweet 2'
        }
    ];
    await getTweets(req, res);
    expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Tweets fetched successfully',
        data: response,
    }) 
})

test('should handle error when getTweets fails', async() => {
    const req = mockRequest();
    const res = mockResponse();
    
    tweetService.getTweets.mockRejectedValue(new Error('Internal server error'));

    await getTweets(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Internal server error',
    })

})


