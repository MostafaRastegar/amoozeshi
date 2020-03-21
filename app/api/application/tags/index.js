import { app } from '../../constants';
import deRequest from '../../../utils/deRequest';

export const tagsAllGet = slug =>
  deRequest(app.tags_all_get(slug), 'GET', {}, false);
