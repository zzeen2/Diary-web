const {DataTypes, Model} = require("sequelize")

class UserBadge extends Model {
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
                badge_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                unlocked_at: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW
                }
            },
            {
                sequelize,
                modelName: "UserBadge",
                tableName: "user_badges",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: false 
            }
        )
    }

    static associate(models) {
        models.UserBadge.belongsTo(models.User, {foreignKey: "user_id", targetKey: "id", as: "user"})
        models.UserBadge.belongsTo(models.Badge, {foreignKey: "badge_id", targetKey: "id", as: "badge"})
    }
}

module.exports = UserBadge;