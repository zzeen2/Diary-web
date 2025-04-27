const {DataTypes, Model} = require("sequelize")

class Badge extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                badge_type: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                name: {
                    type: DataTypes.STRING(50),
                    allowNull: false
                },
                description: {
                    type: DataTypes.STRING(200),
                    allowNull: true
                },
                icon: {
                    type: DataTypes.STRING(255),
                    allowNull: true
                },
                requirement: {
                    type: DataTypes.STRING(255),
                    allowNull: true
                }
            },
            {
                sequelize,
                modelName: "Badge",
                tableName: "badges",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: false
            }
        )
    }

    static associate(models) {
        models.Badge.belongsToMany(models.User, {
            through: "user_badges",
            foreignKey: "badge_id",
            otherKey: "user_id",
            as: "users"
        })
    }
}

module.exports = Badge;