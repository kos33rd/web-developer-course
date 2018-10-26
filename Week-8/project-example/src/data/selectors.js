import {createSelector} from 'reselect'
import _ from 'lodash'

const newsSelector = createSelector(state => state.app.news, news => news || [])

export const newsCount = createSelector(newsSelector,
  (news) => {
    return news.length
  }
);

export const photosSelector = createSelector(newsSelector,
  (news) => {
    return news.filter(
      (article) => !!article.image
    ).map((article) => ({
      src: `https://meduza.io${article.image.large_url}`,
      width: article.image.original_width,
      height: article.image.original_height
    }))
  }
);

export const hoursDistribution = createSelector(newsSelector,
  (news) => {

    const days = new Array(7).fill(0);
    const daysDistribution = days.map(el => new Array(24).fill(0));
    news.forEach(article => {
      const date = new Date(article.published_at * 1000);
      daysDistribution[date.getDay()][date.getHours()] += 1;
    });
    return daysDistribution;
  }
);

export const wordsDistribution = createSelector(newsSelector,
  (news) => {

    return [
      {label: 'CRM', value: 1},
      {label: 'API', value: 1},
      {label: 'Data', value: 1},
      {label: 'Commerce', value: 1},
      {label: 'AI', value: 3},
      {label: 'Management', value: 5},
      {label: 'Testing', value: 6},
      {label: 'Mobile', value: 9},
      {label: 'Conversion', value: 9},
      {label: 'Misc', value: 21},
      {label: 'Databases', value: 22},
      {label: 'DevOps', value: 22},
      {label: 'Javascript', value: 23},
      {label: 'Languages / Frameworks', value: 25},
      {label: 'Front End', value: 26},
      {label: 'Content', value: 26},
    ]
  }
)