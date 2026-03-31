const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  deleteUser,
  getAllPostsAdmin,
  updatePostStatus,
} = require('../controllers/adminController');
const { protect } = require('../middleware/auth');
const { adminAuth } = require('../middleware/adminAuth');

router.use(protect, adminAuth); // All admin routes require auth + admin role

router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.get('/posts', getAllPostsAdmin);
router.patch('/posts/:id/status', updatePostStatus);

module.exports = router;
