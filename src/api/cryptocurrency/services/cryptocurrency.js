'use strict';

/**
 * cryptocurrency service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cryptocurrency.cryptocurrency');
