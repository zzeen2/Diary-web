// test.js
const {LanguageServiceClient} = require('@google-cloud/language');

// JSON 키 파일의 경로를 지정 (현재 폴더에 있다고 가정)
// 키 파일 이름을 여러분이 다운로드한 파일 이름으로 변경하세요
process.env.GOOGLE_APPLICATION_CREDENTIALS = './alien-grove-455208-n1-0e99e97ce8f7.json';

async function analyzeSentiment(text) {
  // 클라이언트 생성
  const client = new LanguageServiceClient();

  // 문서 설정
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
    language: 'ko'  // 한국어로 설정
  };

  // API 호출
  const [result] = await client.analyzeSentiment({document});
  const sentiment = result.documentSentiment;

  console.log('분석된 텍스트:', text);
  console.log('감정 점수 (score):', sentiment.score);  // -1 (부정) ~ 1 (긍정)
  console.log('감정 강도 (magnitude):', sentiment.magnitude);  // 0 ~ ∞

  // 간단한 감정 분류
  let emotion;
  if (sentiment.score >= 0.5) emotion = '매우 긍정적';
  else if (sentiment.score >= 0.1) emotion = '긍정적';
  else if (sentiment.score > -0.1) emotion = '중립적';
  else if (sentiment.score > -0.5) emotion = '부정적';
  else emotion = '매우 부정적';

  console.log('추정된 감정:', emotion);
  
  // 문장별 분석
  console.log('\n--- 문장별 분석 ---');
  result.sentences.forEach((sentence, i) => {
    console.log(`문장 ${i+1}: ${sentence.text.content}`);
    console.log(`  점수: ${sentence.sentiment.score}, 강도: ${sentence.sentiment.magnitude}`);
  });
}

// 여러 다른 감정의 텍스트로 테스트
async function runTests() {
  try {
    console.log("=== 긍정적인 텍스트 테스트 ===");
    await analyzeSentiment('오늘 중요한 면접이 있었는데 바로 합격했다 !.');
    
    console.log("\n=== 부정적인 텍스트 테스트 ===");
    await analyzeSentiment('오늘 직장 상사가 나한테 안좋은 피드백을 줬다. 그렇지만 나를 성장시킬 수 있는 피드백이기 때문에 속상해하지 않고 극복하기로 마음을 먹았다. 앞으로 열심히 해야겠다.');
    
    console.log("\n=== 혼합된 감정의 텍스트 테스트 ===");
    await analyzeSentiment('시험은 잘 봤지만 친구와 다퉜다. 기쁘기도 하고 슬프기도 한 복잡한 하루였다.');
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

// 테스트 실행
runTests();