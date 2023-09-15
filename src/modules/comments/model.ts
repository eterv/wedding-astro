export async function addComment() {
  const url = location.origin + '/api/comments';
  const result = await fetch(url, { method: 'POST' });
  console.log(result.status);

  return await result.json();
}

export async function getComments() {
  const url = location.origin + '/api/comments';
  const result = await fetch(url, { method: 'GET' });
  console.log(result.status);

  const json = await result.json();
  return json.n as number;
}
