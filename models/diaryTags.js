const {DataTypes, Model} = require("sequelize")

class DiaryTag extends Model {
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
                tag_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: "DiaryTag",
                tableName: "diary_tags",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: true // 태그 추가 시간을 기록
            }
        )
    }

    static associate(models) {
        models.DiaryTag.belongsTo(models.Diary, {foreignKey: "diary_id", targetKey: "id", as: "diary"})
        models.DiaryTag.belongsTo(models.Tag, {foreignKey: "tag_id", targetKey: "id", as: "tag"})
    }
}

module.exports = DiaryTag;