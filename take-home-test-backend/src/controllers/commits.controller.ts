import { Controller, Get } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Controller('commits')
export class CommitsController {
  @Get()
  async getCommits(): Promise<any> {
    const octokit = new Octokit();
    const { data } = await octokit.repos.listCommits({
      owner: 'Jebarcia77',
      repo: 'githubApi',
    });
    return data;
  }
}
