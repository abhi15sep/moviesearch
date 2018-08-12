import React from 'react';
import RouterWrapper from './RouterWrapper';
import { shallow } from 'enzyme';
import * as Pages from 'Pages';
import { Route } from 'react-router-dom';
describe('<RouteWrapper> Start Component Test', () => {
    it('Rhould renders page routes without crashing', () => {
        const div = document.createElement('div')
        const store = {
            movies: {
                page: 1,
                results: [{
                    adult: false,
                    backdrop_path: "/dfNrZ82poQ8blHWJreIv6JZQ9JA.jpg",
                    genre_ids: [27, 878],
                    id: 348,
                    original_language: "en",
                    original_title: "Alien",
                    overview:
                        "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
                    popularity: 23.561,
                    poster_path: "/2h00HrZs89SL3tXB4nbkiM7BKHs.jpg",
                    release_date: "1979-05-25",
                    title: "Alien",
                    video: false,
                    vote_average: 8,
                    vote_count:6108
                }],
                total_pages: 0,
                total_results: 2
            }
        }

        const wrapper = shallow(<RouterWrapper indexRoute={'/'} store={store} root={{}} >
            {
              Object.keys(Pages).map((name) => {
                const Page = Pages[name];
                return <Page key={name} className={name} />
              })
            }
          </RouterWrapper>);
        expect(wrapper.find(Route).length).toBe(Object.keys(Pages).length);
    });
})