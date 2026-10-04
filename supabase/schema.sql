create table if not exists public.resumes (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'My Resume',
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists resumes_user_id_idx on public.resumes(user_id);
create index if not exists resumes_updated_at_idx on public.resumes(updated_at desc);

alter table public.resumes enable row level security;

drop policy if exists "Users can view own resumes" on public.resumes;
create policy "Users can view own resumes"
on public.resumes for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own resumes" on public.resumes;
create policy "Users can insert own resumes"
on public.resumes for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own resumes" on public.resumes;
create policy "Users can update own resumes"
on public.resumes for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own resumes" on public.resumes;
create policy "Users can delete own resumes"
on public.resumes for delete
using (auth.uid() = user_id);
