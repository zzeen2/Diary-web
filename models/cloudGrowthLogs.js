const {DataTypes, Model} = require("sequelize")

class CloudGrowthLog extends Model {
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
                previous_stage: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                new_stage: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                growth_reason: {
                    type: DataTypes.STRING(255),
                    allowNull: true
                },
                growth_percentage: {
                    type: DataTypes.DECIMAL(5, 2),
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: "CloudGrowthLog",
                tableName: "cloud_growth_logs",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: true,
                updatedAt: false
            }
        )
    }

    static associate(models) {
        models.CloudGrowthLog.belongsTo(models.User, {foreignKey: "user_id", targetKey: "id", as: "user"})
    }
}

module.exports = CloudGrowthLog;