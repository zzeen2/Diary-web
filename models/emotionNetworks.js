const {DataTypes, Model} = require("sequelize")

class EmotionNetwork extends Model {
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
                time_period: {
                    type: DataTypes.ENUM('week', 'month', 'quarter', 'year', 'all'),
                    allowNull: false,
                    defaultValue: 'month'
                },
                emotion_data: {
                    type: DataTypes.JSON,
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: "EmotionNetwork",
                tableName: "emotion_networks",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: true
            }
        )
    }

    static associate(models) {
        models.EmotionNetwork.belongsTo(models.User, {foreignKey: "user_id", targetKey: "id", as: "user"})
    }
}

module.exports = EmotionNetwork;