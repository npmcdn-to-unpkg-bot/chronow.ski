module.exports = function(School) {
  School.disableRemoteMethod('create', true);
  School.disableRemoteMethod('upsert', true);
  School.disableRemoteMethod('deleteById', true);
  School.disableRemoteMethod("updateAll", true);
  School.disableRemoteMethod("updateAttributes", false);
  School.disableRemoteMethod('createChangeStream', true);
};
