const { validationResult } = require('express-validator');

const { User } = require('../../model/');
const { error, success } = require('../helpers/httpResponse');
const { validationErrors } = require('../helpers/myHelper');
 
class UsuarioController {
    index = async (req, res) => {
        try {
            const user = await User.findAll();
            
            return success(res, 'ok!.', 200, user);
        } catch (e) {
            return error(res, e.message, 500);
        }
    }
    
    show = async (req, res) => {
        const { id_user } = req.params;
        try {
            const user = await User.findByPk(id_user);
            if (!user) { return error(res, 'The User does not exist!.', 404); }
            
            return success(res, 'ok!.', 200, user);
        } catch (e) {
            return error(res, e.message, 500);
        }
    }
    
    store = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const myErrors = validationErrors(errors.array());
                return error(res, 'Validation Error!.', 500, myErrors);
            }
            
            const { first_name, last_name, phone_number, email, password } = req.body;
            const user = await User.create({
                first_name, 
                last_name, 
                phone_number, 
                email, 
                password
            });
    
            return success(res, 'Created successfully!.', 201, user);
        } catch (e) {
            return error(res, e.message, 500);
        }
    }
    
    update = async (req, res) => {
        const { id_user } = req.params;
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const myErrors = validationErrors(errors.array());
                return error(res, 'Validation Error!.', 500, myErrors);
            }
 
            const user = await User.findByPk(id_user);
            if (!user) { return error(res, 'The User does not exist!.', 404); }
    
            const { first_name, last_name, phone_number, email, password } = req.body;
    
            await user.update({
                first_name, 
                last_name, 
                phone_number, 
                email, 
                password
            });
            
            return success(res, 'Updated successfully!.', 200);
        } catch (e) {
            return error(res, e.message, 500);
        }
    }
    
    destroy = async (req, res) => {
        const { id_user } = req.params;
        try {
            const user = await User.findByPk(id_user);
            if (!user) { return error(res, 'The User does not exist!.', 404); }
            user.destroy();
            
            return success(res, 'Deleted successfully!.', 200);
        } catch (e) {
            return error(res, e.message, 500);
        }
    }
}

module.exports = new UsuarioController()