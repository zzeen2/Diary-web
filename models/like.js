const {DataTypes, Model} = require("sequelize")

class Like extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                diary_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: "Like",
                tableName: "likes",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: true
            }
        )
    }

    static associate(models) {
        models.Like.belongsTo(models.User, {foreignKey: "user_id", targetKey: "id", as: "user"})
        models.Like.belongsTo(models.Diary, {foreignKey: "diary_id", targetKey: "id", as: "diary"})
    }
}

module.exports = Like;