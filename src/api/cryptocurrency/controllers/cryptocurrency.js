'use strict';

/**
 * cryptocurrency controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cryptocurrency.cryptocurrency');
