module.exports = function(Exam) {
  Exam.disableRemoteMethod('create', true);
  Exam.disableRemoteMethod('upsert', true);
  Exam.disableRemoteMethod('deleteById', true);
  Exam.disableRemoteMethod("updateAll", true);
  Exam.disableRemoteMethod("updateAttributes", false);
  Exam.disableRemoteMethod('createChangeStream', true);
};
