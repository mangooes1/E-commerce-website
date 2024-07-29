import https from 'https';

export const GET = async (req, res) => {
  return new Promise((resolve, reject) => {
    const url = 'https://twitter154.p.rapidapi.com/search/search/continuation?query=%23python&section=top&min_retweets=20&limit=5&continuation_token=DAACCgACF_Sz76EAJxAKAAMX9LPvoP_Y8AgABAAAAAILAAUAAABQRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUFVWDlJWmx4cHZBZkJmMG5RNUxHdUVQRi9TdTZPSGJzQ0VYOUp6Y3psdUJ3UmYwbFE3Q1dxQWsIAAYAAAAACAAHAAAAAAwACAoAARf0hmXGm8B8AAAA&min_likes=20&start_date=2022-01-01&language=en';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4f83137143msh3f6247df341532dp14ff1bjsn7e8bd78eae59',
        'x-rapidapi-host': 'twitter154.p.rapidapi.com'
      }
    };

    https.get(url, options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(new Response(JSON.stringify(result), { status: 200 }));
        } catch (error) {
          console.error('Error parsing response:', error);
          reject(new Response(JSON.stringify({ error: 'Failed to parse response data' }), { status: 500 }));
        }
      });
    }).on('error', (error) => {
      console.error('Request error:', error);
      reject(new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 }));
    });
  });
};
