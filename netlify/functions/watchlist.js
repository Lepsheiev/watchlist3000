exports.handler = async () => {
  const res = await fetch(
    'https://znpmxqjkyxlanqbyflyy.supabase.co/rest/v1/watchlist?select=*&order=score.desc',
    {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpucG14cWpreXhsYW5xYnlmbHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNTU0NjcsImV4cCI6MjA4OTczMTQ2N30.noKaNHgmE4IJfWHVwuiK2_Z5yuEXG0JN_rlmrvG8al4',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpucG14cWpreXhsYW5xYnlmbHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNTU0NjcsImV4cCI6MjA4OTczMTQ2N30.noKaNHgmE4IJfWHVwuiK2_Z5yuEXG0JN_rlmrvG8al4'
      }
    }
  );
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};
