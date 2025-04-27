const {DataTypes, Model} = require("sequelize")

class UserEmotionCloud extends Model {
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
                growth_stage: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 1 //
                },
                growth_percentage: {
                    type: DataTypes.DECIMAL(5, 2),
                    allowNull: false,
                    defaultValue: 0 
                },
                last_growth_date: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                streak_count: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0 
                },
                longest_streak: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0 
                },
                total_diaries: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0
                }
            },
            {
                sequelize,
                modelName: "UserEmotionCloud",
                tableName: "user_emotion_clouds",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: true
            }
        )
    }

    static associate(models) {
        models.UserEmotionCloud.belongsTo(models.User, {foreignKey: "user_id", targetKey: "id", as: "user"})
    }
}

module.exports = UserEmotionCloud;