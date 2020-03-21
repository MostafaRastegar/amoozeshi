import { app } from '../../constants';
import deRequest from '../../../utils/deRequest';

export const articlesAllGet = () =>
  deRequest(app.articles_all_get(), 'GET', {}, false);

export const articlesByAuthorGet = userName =>
  deRequest(app.articles_by_author_get(userName), 'GET', {}, false);

export const articlesBySlugGet = slug =>
  deRequest(app.articles_by_slug_get(slug), 'GET', {}, false);

export const articlesByTagGet = slug =>
  deRequest(app.articles_by_tag_get(slug), 'GET', {}, false);
