'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dreamer = sequelize.define('Dreamer', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Dreamer.prototype.toJSON =  function () {
    const values = Object.assign({}, this.get());
    delete values.password;

    return JSON.stringify(values);
  }
  return Dreamer;
};