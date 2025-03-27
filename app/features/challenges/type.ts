import { z } from 'zod';
const ChallengeSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
  rawContent: z.string().optional(),
  slug: z.string().optional(),
  cover: z.string().optional(),
  author: z.string().optional(),
});

export type Challenge = z.infer<typeof ChallengeSchema>;
export default ChallengeSchema;
