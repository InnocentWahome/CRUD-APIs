const router = require('express').Router();
const { EmployeeController } = require('../controllers');

router.get('', EmployeeController.index);
router.post('', EmployeeController.create);
router.get('/:id', EmployeeController.show);
router.put('/:id', EmployeeController.update);
router.delete('/:id', EmployeeController.delete);

module.exports = router;
