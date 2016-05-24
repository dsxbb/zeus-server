'use strict';

const models = require('../models/');
const Access = models.Access;

/**
 * add access
 * @param  {[type]} access [description]
 * @return {[type]}        [description]
 */
exports.add_access = (access) => {
  const new_access = new Access(access);
  return new_access.save();
};

/**
 * [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
exports.get_access = (query) => {
  return Access.find(query).exec();
}

exports.get_one = (query) => {
  return Access.findOne(query).exec();
}

exports.delete_access = (query) => {
  return Acces.remove(query);
}
