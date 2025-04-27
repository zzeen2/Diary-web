const {DataTypes, Model} = require("sequelize")

class Tag extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                name: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                    unique: true
                }
            },
            {
                sequelize,
                modelName: "Tag",
                tableName: "tags",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: true 
            }
        )
    }

    static associate(models) {
        models.Tag.belongsToMany(models.Diary, {
            through: "diary_tags",
            foreignKey: "tag_id",
            otherKey: "diary_id",
            as: "diaries"
        })
    }
}

module.exports = Tag;