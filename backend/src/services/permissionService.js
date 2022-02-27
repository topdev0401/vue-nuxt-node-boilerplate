import _ from 'lodash';
import axios from 'axios';
import configService from '@/services/configService';
import utils from '@/helper/utils';

export default {
  async list({ query = {} } = {}) {
    const pickedQuery = _.pick(query, ['page', 'page_size', 'q']);
    let url = `${configService.get('apiUrl')}/permission`;
    if (pickedQuery.length) {
      url += `?${utils.toQueryStrings(pickedQuery)}`;
    }

    return axios
      .get(url, {})
      .then(response => response.data)
      .catch(e => {
        throw e;
      });
  }
};
