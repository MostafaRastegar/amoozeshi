/* eslint-disable camelcase */
import { API_URL_ROOT } from '../global';

// Articles
export const articles_all_get = () => `${API_URL_ROOT}/articles`;
export const articles_by_author_get = userName =>
  `${API_URL_ROOT}/articles?author=${userName}`;
export const articles_by_slug_get = slug => `${API_URL_ROOT}/articles/${slug}`;
export const articles_by_tag_get = slug =>
  `${API_URL_ROOT}/articles?tag=${slug}`;

// Tags
export const tags_all_get = () => `${API_URL_ROOT}/tags`;

// Comments
export const comments_all_for_articles_get = slug =>
  `${API_URL_ROOT}/articles/${slug}/comments`;
export const comments_create_for_articles_post = slug =>
  `${API_URL_ROOT}/articles/${slug}/comments`;
