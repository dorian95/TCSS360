/**
*   Class to test backend code
*   Author: Nursultan Irgaliyev
*   Date: 12/6/2016
*
**/


//imports
var assert = require('assert')

var student = require('./source/JavaScriptFiles/Student.js')
var degree = require('./source/JavaScriptFiles/Degree.js')
var job = require('./source/JavaScriptFiles/Job.js')


describe('listStudents and addStudent Tests', function() {
    it('asserts equal if after adding a student the size of the list retured is +1', function(done) {
        student.listStudents(function(err, result1) {
            var fName = 'Ben', lName = 'Russell', studentID = '1';
            student.addStudent(fName, lName, studentID);
            student.listStudents(function(err, result2) {
                assert.deepEquals(result1.length + 1 == result2.length);
                done();
            });
            done();
        });
    });
});
describe('listStudents and deleteStudent Tests', function() {
    it('asserts equal if after deleteing a student the size of the list retured is -1', function(done) {
        student.listStudents(function(err, result1) {
            var fName = 'Ben', lName = 'Russell', studentID = '1';
            student.deleteStudent(studentID);
            student.listStudents(function(err, result2) {
                assert.deepEquals(result1.length == result2.length);
                done();
            });
            done();
        });
    });
});

describe('test for listJobs() and addJob()', function() {
    it('asserts equal if the size of the list returned is + 1 after adding a job', function(done) {
        job.listJobs(function(err, result1) {
            var employer = 'Allen Institute for AI', studentID = '2';
            job.addJib(employer, studentID);
            student.listJobs(function(err, result2) {
                assert.deepEquals(result1.length + 1 == result2.length);
                done();
            });
            done();
        });
    });
});

describe('test for listDegrees() and addJob()', function() {
    it('asserts equal if after adding a student the size of the list retured is +1', function(done) {
        degree.listDegrees(function(err, result1) {
            var degreeName = 'PhD.', studentID = '1';
            degree.addDegree(degreeName, studentID);
            degree.listDegrees(function(err, result2) {
                assert.deepEquals(result1.length + 1 == result2.length);
                done();
            });
            done();
        });
    });
});
