const express = require('express');
const { getCourses, getCourse, addCourse } = require('../controllers/courses');
const Course = require('../models/Course');

const advancedResults = require('../middleware/advancedResults');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getCourses
  )
  .post(addCourse);
router.route('/:id').get(getCourse);

module.exports = router;
