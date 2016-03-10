module.exports = function(Project) {
  Project.disableRemoteMethod('create', true);
  Project.disableRemoteMethod('upsert', true);
  Project.disableRemoteMethod('deleteById', true);
  Project.disableRemoteMethod("updateAll", true);
  Project.disableRemoteMethod("updateAttributes", false);
  Project.disableRemoteMethod('createChangeStream', true);
};
