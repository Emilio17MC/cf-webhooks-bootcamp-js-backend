import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  private readonly discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  async notify(message: string) {
    const body = {
      content: message,
    };

    const resp = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      console.log('Error sending message to discord');
      return false;
    }

    return true;
  }
}
