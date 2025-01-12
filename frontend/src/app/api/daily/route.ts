import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

interface DailyContent {
    tongueTwister: string;
    phrase: string;
    movieQuote: string;
    lastUpdated: string;
}

async function getDailyContent(): Promise<DailyContent> {
    const msg = await anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1024,
        messages: [{
            role: 'user',
            content: 'Generate 1 tongue twister, 1 common English phrase, and 1 famous movie quote that would be useful for English learners. Return in JSON format with keys "tongueTwister" and "phrase". Make the tongue twister challenging but not too difficult, and the phrase should be commonly used in daily conversation.'
        }]
    });

    if (msg.content[0].type !== 'text') {
        throw new Error('Unexpected response format');
    }

    const content = JSON.parse(msg.content[0].text);
    return {
        ...content,
        lastUpdated: new Date().toISOString()
    };
}

export async function GET() {
    try {
        const cachePath = join(process.cwd(), 'temp', 'daily_content.json');
        let dailyContent: DailyContent;

        try {
            const cached = await readFile(cachePath, 'utf-8');
            const content = JSON.parse(cached);
            const lastUpdate = new Date(content.lastUpdated);
            const now = new Date();

            // Check if content is from a different day
            if (lastUpdate.toDateString() !== now.toDateString()) {
                throw new Error('Cache expired');
            }
            dailyContent = content;
        } catch {
            // If file doesn't exist or is outdated, get new content
            dailyContent = await getDailyContent();
            await writeFile(cachePath, JSON.stringify(dailyContent), 'utf-8');
        }

        return NextResponse.json(dailyContent);
    } catch (error) {
        console.error('Error getting daily content:', error);
        return NextResponse.json(
            { error: 'Failed to get daily content' },
            { status: 500 }
            
        );
    }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic'; 