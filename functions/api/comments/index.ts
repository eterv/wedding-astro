import { v4 as uuid4 } from 'uuid';

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction = async (_ctx) => {
  return new Response(
    JSON.stringify({ result: 'pass!', n: '12' + Math.random() }),
  );
};

export const onRequestPost: PagesFunction<Env> = async ({ env }) => {
  const { DB } = env;

  console.log('db?', DB);

  const stmt = DB.prepare(
    'INSERT INTO comments (id, name) VALUES (?1, ?2)',
  ).bind(uuid4(), 'John Smith');
  const result = await stmt.run();

  return new Response(JSON.stringify(result));
};
