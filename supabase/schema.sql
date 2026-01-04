-- Create a table to store interview questions (Metadata only, no vectors)
create table if not exists interview_questions (
  id bigint primary key generated always as identity,
  category text,
  difficulty text, -- 'Easy', 'Medium', 'Hard'
  question_text text
);

-- Index for faster category filtering
create index if not exists idx_category on interview_questions(category);
