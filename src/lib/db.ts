import { supabase } from './supabase'

export async function updateDatabase(userId: string, companyId: string, scrapedJobs: any[]) {
  const { data, error } = await supabase
    .from('jobs')
    .upsert(
      scrapedJobs.map(job => ({
        user_id: userId,
        company_id: companyId,
        title: job.title,
        link: job.link,
        matches: job.matches,
      })),
      { onConflict: ['user_id', 'company_id', 'link'] }
    )

  if (error) {
    console.error('Error updating database:', error)
  }
  return data
}