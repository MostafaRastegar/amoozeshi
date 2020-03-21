import { app } from '../../constants';
import deRequest from '../../../utils/deRequest';

export const commentsAllForArticlesGet = slug =>
  deRequest(app.comments_all_for_articles_get(slug), 'GET');
export const commentsCreateForArticlesPost = params =>
  deRequest(
    app.comments_create_for_articles_post(params.slug),
    'POST',
    params.body,
    false,
  );
