exports.handler = async () => {
  const res = await fetch(
    'https://znpmxqjkyxlanqbyflyy.supabase.co/rest/v1/watchlist?select=data&limit=1',
    {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpucG14cWpreXhsYW5xYnlmbHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNTU0NjcsImV4cCI6MjA4OTczMTQ2N30.noKaNHgmE4IJfWHVwuiK2_Z5yuEXG0JN_rlmrvG8al4',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpucG14cWpreXhsYW5xYnlmbHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNTU0NjcsImV4cCI6MjA4OTczMTQ2N30.noKaNHgmE4IJfWHVwuiK2_Z5yuEXG0JN_rlmrvG8al4'
      }
    }
  );

  const rows = await res.json();
  // jsonb — вже об'єкт, JSON.parse не потрібен
  const data = JSON.parse(rows[0].data);

  const clean = data.map(({ ticker, score, cat, note, updated }) => ({
    ticker, score, cat, note, updated
  }));

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
    body: JSON.stringify(clean)
  };
};
```

Commit → зачекай деплой → вставте:
```
https://watchlist3000.netlify.app/.netlify/functions/watchlist-public
