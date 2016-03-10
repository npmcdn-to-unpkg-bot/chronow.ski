module.exports = function(Subject) {
  Subject.disableRemoteMethod('create', true);
  Subject.disableRemoteMethod('upsert', true);
  Subject.disableRemoteMethod('deleteById', true);
  Subject.disableRemoteMethod("updateAll", true);
  Subject.disableRemoteMethod("updateAttributes", false);
  Subject.disableRemoteMethod('createChangeStream', true);
};
