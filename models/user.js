// 유저 테이블
const{DataTypes, Model} = require("sequelize")

class Users extends Model {
    static init (sequelize) {
        return super.init({
            id : {
                type : DataTypes.INTEGER,
                autoIncrement : true,
                primaryKey: this
            },
            uid : { // 사용자 아이디
                type : DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
            upw : {
                type : DataTypes.STRING(200),
                allowNull: false
            },
            email:{
                type:DataTypes.STRING(100),
                unique:true,
                allowNull: false,
                validate:{ // 이메일 형식 맞는지 확인하기
                    isEmail:true
                }
            },
            name : { // 사용자 이름
                type : DataTypes.STRING(10),
                allowNull:false
            },
            profile_image : {
                type: DataTypes.STRING(255),
                allowNull : true
            }
        },{
            sequelize,
            modelName : "Users",
            tableName:"users",
            charset : "utf8mb4",
            collate : "utf8mb4_general_ci"
        })
    }
    static associate(models){
        models.User.hasMany(models)
    }
}

module.exports = Users;