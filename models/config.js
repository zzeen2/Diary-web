const Sequalize = require("sequelize");
const Users = require('./user');
require('dotenv').config();

// 모델 가져오기
const User = require('./user');
const Emotion = require('./emotion');
const Diary = require('./diaries');
const Comment = require('./comment');
const Like = require('./like');
const Follow = require('./follow');
const UserEmotionCloud = require('./userEmotionCloud');
const EmotionNetwork = require('./emotionNetworks');
const CloudGrowthLog = require('./cloudGrowthLogs');
const Badge = require('./badges');
const UserBadge = require('./userBadges');
const Tag = require('./tags');
const DiaryTag = require('./diaryTags');
const Notification = require('./notification');

const sequelize = new Sequalize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : "mysql"
    }
)

// 모델 초기화
const models = {
    User: User.init(sequelize),
    Emotion: Emotion.init(sequelize),
    Diary: Diary.init(sequelize),
    Comment: Comment.init(sequelize),
    Like: Like.init(sequelize),
    Follow: Follow.init(sequelize),
    UserEmotionCloud: UserEmotionCloud.init(sequelize),
    EmotionNetwork: EmotionNetwork.init(sequelize),
    CloudGrowthLog: CloudGrowthLog.init(sequelize),
    Badge: Badge.init(sequelize),
    UserBadge: UserBadge.init(sequelize),
    Tag: Tag.init(sequelize),
    DiaryTag: DiaryTag.init(sequelize),
    Notification: Notification.init(sequelize)
};

// 모델 간 관계 설정
Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

// 데이터베이스 연결 테스트
sequelize.authenticate()
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch(err => {
        console.error('데이터베이스 연결 실패:', err);
    });

sequelize.sync( { force : false } ).then(() => {
    console.log("database on~")
}).catch((err) => {
    console.log(err);
})

module.exports = {
    sequelize,
    ...models
};
