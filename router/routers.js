var express = require('express');
var router = express.Router();

const school_controller = require('../Controllers/School');
const teacher_controller = require('../Controllers/Teacher');
const student_controller = require('../Controllers/Student');
const class_controller = require('../Controllers/Class');

router.post('/createSchool', school_controller.school_create_post);
router.post('/:scholl/:teacher/assign', teacher_controller.assign_teacher_to_school_post);
router.post('/:scholl/:teacher/delete', teacher_controller.remove_teacher_from_school_post);

router.post('/:school/:student/assign', student_controller.assign_student_to_school_post);
router.get('/:school/:student/delete', student_controller.remove_student_from_school_get);

router.post('/:class/create', class_controller.create_class_post);
router.post('/:student/:class/assign', student_controller.assign_student_to_class_post);
router.get('/:student/:class/delete', student_controller.remove_student_from_class_get);
router.get('/:class/delete', class_controller.delete_class_get);

router.get('/allchool', school_controller.all_scholls_get);
router.get('/teachers/:school', teacher_controller.teachers_of_school_get);
router.get('/students/:school', student_controller.students_of_school_get);
router.get('/students/:class', student_controller.students_of_class_get);
router.get('/:teacher/allclasses', teacher_controller.all_classes_of_teacher_get);
router.get('/:class/allstudents', class_controller.all_students_of_class_get);

module.exports = router;