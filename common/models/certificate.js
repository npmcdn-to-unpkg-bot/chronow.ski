module.exports = function(Certificate) {
  Certificate.disableRemoteMethod('create', true);
  Certificate.disableRemoteMethod('upsert', true);
  Certificate.disableRemoteMethod('deleteById', true);
  Certificate.disableRemoteMethod("updateAll", true);
  Certificate.disableRemoteMethod("updateAttributes", false);
  Certificate.disableRemoteMethod('createChangeStream', true);
};
