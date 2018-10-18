import { createSelector } from 'reselect'

const newsSelector = createSelector(state => state.app.news, news => news || [])

export const newsCount = createSelector(newsSelector,
  (news) => {
    console.log('Calculating...')
    return news.length
  }
)
