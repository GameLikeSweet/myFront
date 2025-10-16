// Netlify Function: /solvedac
// 요청: /.netlify/functions/solvedac?id=문제번호
export async function handler(event) {
  const id = event.queryStringParameters?.id;
  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'missing id' }),
    };
  }

  const url = `https://solved.ac/api/v3/problem/show?problemId=${encodeURIComponent(id)}`;

  try {
    const resp = await fetch(url, {
      headers: { Accept: 'application/json' },
      // solved.ac에 쿠키/인증 필요 없음
    });
    const text = await resp.text();

    return {
      statusCode: resp.status,
      headers: {
        'Access-Control-Allow-Origin': '*',         // CORS 허용
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      body: text, // solved.ac의 JSON을 그대로 반환
    };
  } catch (e) {
    return {
      statusCode: 502,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'upstream failed', detail: String(e) }),
    };
  }
}
