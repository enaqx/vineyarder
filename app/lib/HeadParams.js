'use strict';
var $ = require('jquery');
var VineyarderRes = require('../assets/resources/VineyarderResources');

var isClient = function() {
  return typeof window !== 'undefined';
};

/**
 * Contains parameters for the <HEAD> that will be examined when the <HEAD> is
 * being constructed by server side rendering. When parameters are set in a
 * browser, they will be applied to the DOM directly.
 * @param {string} title The page title for <title>.
 * @param {string} description The description for <meta name=description>.
 * @constructor
 */
var HeadParams = function(title, description) {
  this.title = title || VineyarderRes.TITLE;
  this.description = description || VineyarderRes.DESCRIPTION;
};

/**
 * Sets the page title
 * @param {string} title The page title for <title>.
 * @return {void}
 */
HeadParams.prototype.setTitle = function(title) {
  this.title = title;

  if (isClient()) {
    $("head > title").text(title);
  }
};

/**
 * Sets content for the description meta tag
 * @param {string} description The description for <meta name=description>.
 * @return {void}
 */
HeadParams.prototype.setDescription = function(description) {
  this.description = description;

  if (isClient()) {
    $("head > meta[name=description]").attr('content', description);
  }
};

module.exports = HeadParams;
