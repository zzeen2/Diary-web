const {DataTypes, Model } = require("sequelize")

class Emotion extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement : true,
                    primaryKey: true
                },
                name: {
                    type : DataTypes.STRING(30),
                    allowNull : false,
                    unique: true
                },
                description : {
                    type : DataTypes.STRING(200),
                    allowNull: true
                },
                color : {
                    type : DataTypes.STRING(20), // 색상 코드
                    allowNull:true
                },
                icon: {
                    type : DataTypes.STRING(300), 
                    allowNull: true
                },
                icon_stage_1: {
                    type : DataTypes.STRING(300),
                    allowNull:true
                },
                icon_stage_2: {
                    type : DataTypes.STRING(300),
                    allowNull:true
                },
                icon_stage_3: {
                    type : DataTypes.STRING(300),
                    allowNull:true
                },
                icon_stage_4: {
                    type : DataTypes.STRING(300),
                    allowNull:true
                },
                icon_stage_5: {
                    type : DataTypes.STRING(300),
                    allowNull:true
                }
            },
            {
                sequelize,
                modelName: "Emotion",
                tableName: "emotions",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: false
            }
        )
    }
    static associate(models) {
        models.Emotion.hasMany(models.Diary, { foreignKey : "emotion_id", as : "userSelectedDiaries"});
        models.Emotion.hasMany(models.Diary, {foreignKey : "suggested_emotion_id", as: "suggestedDiaries" })
    }
}

module.exports = Emotion;