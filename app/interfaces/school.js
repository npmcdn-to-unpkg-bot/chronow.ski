System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var POLISH_GRADES, AMERICAN_GRADES, Grade;
    return {
        setters:[],
        execute: function() {
            POLISH_GRADES = {
                0: '',
                1: 'niedostateczny',
                2: 'dopuszczający',
                3: 'dostateczny',
                4: 'dobry',
                5: 'bardzo dobry',
                6: 'celujący'
            };
            AMERICAN_GRADES = {
                0: '',
                1: 'F',
                2: 'D',
                3: 'C',
                4: 'B',
                5: 'A',
                6: 'A+'
            };
            Grade = (function () {
                function Grade(grade) {
                    this.numerical = grade;
                    this.polish = POLISH_GRADES[grade];
                    this.american = AMERICAN_GRADES[grade];
                }
                return Grade;
            }());
            exports_1("Grade", Grade);
        }
    }
});
//# sourceMappingURL=school.js.map