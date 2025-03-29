// 감정 테이블
const {DataTypes, Model} = require("sequelize");

class Emotion extends Model {
    static init (sequelize) {
        return super.init({
            id : {
                type : DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey: true
            },
            name : {
                type: DataTypes.STRING(30),
                allowNull:false,
                unique:true
            },
            description: {
                type: DataTypes.STRING(200),
                allowNull:true,
            },
            color: {
                type: DataTypes.STRING(20),
                allowNull:true
            },
            icon:{
                type:DataTypes.STRING(255),
                allowNull:true
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Emotion',
            tableName: 'emotions',
            paranoid: false,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        })
    }
    static associate(models){
        // 관계성 
    }
}