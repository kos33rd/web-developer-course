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

    const data = _.chain(news)
      .map(article => article.title)
      .reduce((title, acc) => _.concat(_.words(title), acc), [])
      .map(_.toLower)
      .countBy(_.identity)
      .map((count, word) => ({ label: word, value: count }))
      .sortBy(['value'])
      .reverse()
      .take(10)
      .value()

    console.log(data)
    return data
  }
)