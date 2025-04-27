const {DataTypes, Model} = require("sequelize");

class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                id : {
                    type : DataTypes.INTEGER,
                    autoIncrement : true,
                    primaryKey : true
                },
                uid : {
                    type : DataTypes.STRING(100), // 카카오아이디, 가입아이디
                    allowNull : false,
                    unique : true
                },
                upw : {
                    type : DataTypes.STRING(200),
                    allowNull : false
                },
                email : {
                    type : DataTypes.STRING(100),
                    allowNull:true
                },
                name: {
                    type : DataTypes.STRING(30),
                    allowNull : false
                },
                profile_image : {
                    type : DataTypes.STRING(255),
                    allowNull: true
                },
                bio : {
                    type : DataTypes.STRING(300),
                    allowNull : true
                }
            },
            {
                sequelize,
                modelName: "User",
                tableName: "users",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                timestamps: true 
            }
        )
    }
    static associate(models) {
        models.User.hasMany(models.Diary, {foreignKey : "user_id", sourceKey : "id", as : "Diaries"})
        models.User.hasMany(models.Comment, {foreignKey : "user_id", sourceKey : "id", as : "comments"})
        models.User.belongsToMany(models.User, {through:"follows", foreignKey : "following_id", otherKey : "follower_id", as : "followers"})
        models.User.belongsToMany(models.User, {through:"follows", foreignKey : "follower_id", otherKey: "following_id", as : "followings"})
        models.User.hasOne(models.UserEmotionCloud, {foreignKey : "user_id", sourceKey : "id", as : "emotionCloud"})
        models.User.belongsToMany(models.Badge, {foreignKey : "user_id", through : "user_badge" , as :"badges"})
    }
}

module.exports = User;