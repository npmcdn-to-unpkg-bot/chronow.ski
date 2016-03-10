module.exports = function(Sociallink) {
  Sociallink.disableRemoteMethod('create', true);
  Sociallink.disableRemoteMethod('upsert', true);
  Sociallink.disableRemoteMethod('deleteById', true);
  Sociallink.disableRemoteMethod("updateAll", true);
  Sociallink.disableRemoteMethod("updateAttributes", false);
  Sociallink.disableRemoteMethod('createChangeStream', true);
};
