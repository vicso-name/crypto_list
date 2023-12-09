'use strict';

/**
 * cryptocurrency router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cryptocurrency.cryptocurrency');
