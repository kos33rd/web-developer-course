import { createSelector } from 'reselect'

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

        const hoursSlice = new Array(24).fill(0);
        news.forEach(article => {
            const date = new Date(article.published_at * 1000);
            hoursSlice[date.getHours()] += 1
        });
        return [hoursSlice];

    }
);
