System.register(['../interfaces/school'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var school_1;
    var SCHOOLS;
    return {
        setters:[
            function (school_1_1) {
                school_1 = school_1_1;
            }],
        execute: function() {
            exports_1("SCHOOLS", SCHOOLS = [
                {
                    'name': "Technical High School of Mechatronics no. 1 in Warsaw",
                    'codename': 'staff',
                    'logo': false,
                    'subjects': [
                        { 'name': "Conduct", 'grade': new school_1.Grade(4) },
                        { 'name': "Religion", 'grade': new school_1.Grade(4) },
                        { 'name': "Polish", 'grade': new school_1.Grade(0) },
                        { 'name': "English", 'grade': new school_1.Grade(0) },
                        { 'name': "German", 'grade': new school_1.Grade(2) },
                        { 'name': "History and Civics", 'grade': new school_1.Grade(0) },
                        { 'name': "History", 'grade': new school_1.Grade(4) },
                        { 'name': "Civics", 'grade': new school_1.Grade(4) },
                        { 'name': "Culture", 'grade': new school_1.Grade(5) },
                        { 'name': "Math", 'grade': new school_1.Grade(0) },
                        { 'name': "Physics", 'grade': new school_1.Grade(0) },
                        { 'name': "Geography", 'grade': new school_1.Grade(4) },
                        { 'name': "Biology", 'grade': new school_1.Grade(3) },
                        { 'name': "Chemistry", 'grade': new school_1.Grade(4) },
                        { 'name': "ICT", 'grade': new school_1.Grade(4) },
                        { 'name': "Physical Education", 'grade': new school_1.Grade(0) },
                        { 'name': "Safety Education", 'grade': new school_1.Grade(3) }
                    ],
                    'technical_subjects': [
                        { 'name': "Preparing workstation for work", 'grade': new school_1.Grade(3) },
                        { 'name': "Use of PC peripherals", 'grade': new school_1.Grade(4) },
                        { 'name': "Repairing personal computers", 'grade': new school_1.Grade(4) },
                        { 'name': "Designing and installing of LAN networks", 'grade': new school_1.Grade(4) },
                        { 'name': "Configuring networking devices", 'grade': new school_1.Grade(4) },
                        { 'name': "Administrating server operating systems", 'grade': new school_1.Grade(5) },
                        { 'name': "Creating websites", 'grade': new school_1.Grade(5) },
                        { 'name': "Creating and administration of databases", 'grade': new school_1.Grade(5) },
                        { 'name': "Creating web applications", 'grade': new school_1.Grade(4) },
                        { 'name': "EHS", 'grade': new school_1.Grade(3) },
                        { 'name': "Business", 'grade': new school_1.Grade(5) },
                        { 'name': "Internship", 'grade': new school_1.Grade(6) },
                    ]
                },
                {
                    'name': "Community Middle School no. 40 in Warsaw",
                    'codename': 'stryjenskich',
                    'logo': true,
                    'exams': [
                        { 'name': "Polish", 'score': 88 },
                        { 'name': "History and Civics", 'score': 85 },
                        { 'name': "Math", 'score': 93 },
                        { 'name': "Science", 'score': 77 },
                        { 'name': "Basic English", 'score': 98 },
                        { 'name': "Advanced English", 'score': 93 },
                    ],
                    'subjects': [
                        { 'name': "Conduct", 'grade': new school_1.Grade(5) },
                        { 'name': "Religion", 'grade': new school_1.Grade(5) },
                        { 'name': "Polish", 'grade': new school_1.Grade(4) },
                        { 'name': "English", 'grade': new school_1.Grade(4) },
                        { 'name': "German", 'grade': new school_1.Grade(3) },
                        { 'name': "History", 'grade': new school_1.Grade(4) },
                        { 'name': "Civics", 'grade': new school_1.Grade(5) },
                        { 'name': "Math", 'grade': new school_1.Grade(4) },
                        { 'name': "Physics", 'grade': new school_1.Grade(4) },
                        { 'name': "Geography", 'grade': new school_1.Grade(4) },
                        { 'name': "Biology", 'grade': new school_1.Grade(4) },
                        { 'name': "Chemistry", 'grade': new school_1.Grade(4) },
                        { 'name': "Science", 'grade': new school_1.Grade(4) },
                        { 'name': "Music", 'grade': new school_1.Grade(4) },
                        { 'name': "Visual arts", 'grade': new school_1.Grade(5) },
                        { 'name': "Art", 'grade': new school_1.Grade(6) },
                        { 'name': "Technology", 'grade': new school_1.Grade(5) },
                        { 'name': "ICT", 'grade': new school_1.Grade(4) },
                        { 'name': "Physical Education", 'grade': new school_1.Grade(4) },
                        { 'name': "Safety Education", 'grade': new school_1.Grade(3) },
                    ]
                },
                {
                    'name': "Primary School no. 146 in Warsaw",
                    'codename': 'sp146',
                    'logo': true,
                    'exams': [
                        { 'name': "Reading", 'score': 100 },
                        { 'name': "Writing", 'score': 60 },
                        { 'name': "Reasoning", 'score': 100 },
                        { 'name': "Use of information", 'score': 75 },
                        { 'name': "Use of knowledge", 'score': 100 },
                    ],
                    'subjects': [
                        { 'name': "Conduct", 'grade': new school_1.Grade(4) },
                        { 'name': "Religion", 'grade': new school_1.Grade(3) },
                        { 'name': "Polish", 'grade': new school_1.Grade(4) },
                        { 'name': "English", 'grade': new school_1.Grade(4) },
                        { 'name': "French", 'grade': new school_1.Grade(3) },
                        { 'name': "History", 'grade': new school_1.Grade(4) },
                        { 'name': "Math", 'grade': new school_1.Grade(6) },
                        { 'name': "Science", 'grade': new school_1.Grade(4) },
                        { 'name': "Technology", 'grade': new school_1.Grade(5) },
                        { 'name': "ICT", 'grade': new school_1.Grade(6) },
                        { 'name': "Music", 'grade': new school_1.Grade(3) },
                        { 'name': "Visual arts", 'grade': new school_1.Grade(3) },
                        { 'name': "Physical Education", 'grade': new school_1.Grade(5) },
                    ]
                },
            ]);
        }
    }
});
//# sourceMappingURL=schools.js.map