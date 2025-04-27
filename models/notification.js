const {DataTypes, Model} = require("sequelize")

class Notification extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                sender_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                type: {
                    type: DataTypes.ENUM('comment', 'like', 'follow', 'growth', 'badge'),
                    allowNull: false
                },
                reference_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                message: {
                    type: DataTypes.STRING(255),
                    allowNull: false
                },
                is_read: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false
                }
            },
            {
                sequelize,
                modelName: "Notification",
                tableName: "notifications",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: true,
                updatedAt: false 
            }
        )
    }

    static associate(models) {
        models.Notification.belongsTo(models.User, {foreignKey: "user_id", targetKey: "id", as: "recipient"})
        models.Notification.belongsTo(models.User, {foreignKey: "sender_id", targetKey: "id", as: "sender"})
    }
}

module.exports = Notification;