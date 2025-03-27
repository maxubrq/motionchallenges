import path from 'path';
import { glob } from 'glob';
import ChallengeSchema, { Challenge } from './type';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
export default class ChallengesService {
  private _CHALLENGE_FOLDER = '/app/features/challenges/content';

  async contentPath(locale: string) {
    const currentDir = process.cwd();
    const contentDir = path.join(currentDir, this._CHALLENGE_FOLDER, locale);
    return contentDir;
  }

  async loadChallenge(file: string) {
    const content = await fs.readFile(file, 'utf-8');
    const basename = path.basename(file);
    const { data, content: rawContent } = matter(content);
    const challenge = {
      ...data,
      rawContent,
      slug: encodeURI(basename.replace('.mdx', '')),
    };

    const parsedChallenge = ChallengeSchema.safeParse(challenge);
    if (!parsedChallenge.success) {
      throw new Error('Challenge validation failed');
    }
    return parsedChallenge.data;
  }

  async loadAllChallenges(locale: string) {
    const contentDir = await this.contentPath(locale);
    const files = glob.globSync(`${contentDir}/*.mdx`);
    const challenges: Challenge[] = [];
    for (const file of files) {
      const challenge = await this.loadChallenge(file);
      challenges.push(challenge);
    }
    return challenges;
  }

  async loadChallengeBySlug(slug: string, locale: string) {
    const contentDir = await this.contentPath(locale);
    const file = path.join(contentDir, `${slug}.mdx`);
    return this.loadChallenge(file);
  }
}
