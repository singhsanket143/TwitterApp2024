import { getTweets, sum } from "../src/controllers/tweetController.js";
import { mockRequest, mockResponse } from "./mocker.js";
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
test ('add 3 + 4 should equals 7', () => {
    expect(sum(3,4)).toBe(7)
});
  
test('should return tweets', async () => {
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
    });
})