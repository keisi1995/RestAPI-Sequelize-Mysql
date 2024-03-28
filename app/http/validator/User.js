const { body } = require('express-validator');

exports.validateStore = [
    body('first_name')
        .trim()
        .not().isEmpty().withMessage('El campo es requerido')
        .matches(/^[a-zA-Z\s]+$/).withMessage('El campo solo puede contener letras y espacios')
        .isLength({min: 5, max: 20}).withMessage('El campo debe tener entre 5 y 20 caracteres'),

    body('last_name')
        .trim()
        .not().isEmpty().withMessage('El campo es requerido')
        .matches(/^[a-zA-Z\s]+$/).withMessage('El campo solo puede contener letras y espacios')
        .isLength({min: 5, max: 20}).withMessage('El campo debe tener entre 5 y 20 caracteres'),

    body('email')
        .trim()
        .not().isEmpty().withMessage('El campo es requerido')
        .isEmail().withMessage('El campo no tiene un formato de email válido'),
    
    body('password')
        .trim()
        .not().isEmpty().withMessage('El campo es requerido')
        .isLength({min: 5, max: 10}).withMessage('El campo debe tener entre 5 y 10 caracteres'),

    body('phone_number')
        .trim()
        .not().isEmpty().withMessage('El campo es requerido')
        .isInt().withMessage('El campo debe ser numerico')
        .isLength({ min: 7, max: 15}).withMessage('El campo debe tener entre 7 y 15 caracteres'),

    body('edad')
        .optional()
        .isInt({ min: 18 }).withMessage('La edad debe ser un número entero mayor o igual a 18')
]


exports.validateLogin = [
    body('email')
        .trim()
        .not().isEmpty().withMessage('El campo es requerido')
        .isEmail().withMessage('El campo no tiene un formato de email válido'),
    
    body('password')
        .trim()
        .not().isEmpty().withMessage('El campo es requerido')
        .isLength({min: 5, max: 10}).withMessage('El campo debe tener entre 5 y 10 caracteres'), 
]
