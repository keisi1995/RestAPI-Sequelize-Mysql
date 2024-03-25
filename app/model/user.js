const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

class User extends Model {
    static initialize(sequelize) {
        this.init({
            id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            first_name: { type: DataTypes.STRING(50), allowNull: true },
            last_name: { type: DataTypes.STRING(50), allowNull: true },
            phone_number: { type: DataTypes.INTEGER, allowNull: true },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
                validate: { isEmail: true, notEmpty: true }
            },
            password: { type: DataTypes.STRING(255), allowNull: false }
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'user',
            defaultScope: {
                attributes: {
                    exclude: ['password'] // exclude the  column 'password'
                }
            },
            scopes: {
                withPassword: {
                    attributes: {} // show all columns
                }
            },
            hooks: {
                // beforeCreate: async (user, options) => {
                //     if (user.password) {
                //         const hashedPassword = await bcrypt.hash(user.password, 10);
                //         user.password = hashedPassword;
                //     }
                // },
                beforeSave: async (user, options) => {
                    console.log('hola')
                    if (user.changed('password')) {
                        console.log('cambiando contraseña')
                        const hashedPassword = await bcrypt.hash(user.password, 10);
                        user.password = hashedPassword;
                    }
                },
            }
        });
    }    
    
    async comparePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

// User.beforeCreate(async (user, options) => {
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     user.password = hashedPassword;
// });

// User.prototype.comparePassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };

module.exports = User;