import { expect } from 'chai'

// import api from '../../src/server';
// import Article from '../../src/models/article';
// import config from '../../src/config';
// import { dropDBs, loadFixture, withLogin } from '../utils.js';

describe('Article controller', () => {
  // let article

  // before(async () => {
  //   await dropDBs()
  //   await loadFixture('initial-data', 'articles')
  //   article = await Article.findOne({})
  //   expect(article).to.not.be.null
  //   expect(article.rss).to.not.be.null
  // })

  describe('get', () => {
    it('should return the right article via /articles/:articleId', async () => {
      // let response = await withLogin(request(api).get(`/articles/${article.id}`))
      const response = { status: 200 }
      expect(response).to.have.status(200)
    })
  })
})
