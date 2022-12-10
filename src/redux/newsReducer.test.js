import newsReducer from "./newsReducer";

const stateBefore = {
    newsWorld: [],
    article: {},
    preloader: false,
    error: false,
};

global.fetch = jest.fn();

describe('check newsReducer', () => {
    test('NEWS', () => {
        const action = {
            type: 'NEWS', 
            myNews: [1, 2, 3]
        };
        expect(newsReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            newsWorld: action.myNews
        })
    });
    test('GET_ARTICLE', () => {
        const action = {
            type: 'GET_ARTICLE', 
            post: {id: 12, title: 'Travel'}
        };
        expect(newsReducer(stateBefore, action)).toEqual({
            ...stateBefore,
            article: action.post,
        })
    });
})