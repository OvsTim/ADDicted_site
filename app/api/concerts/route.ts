// app/api/concerts/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic'; // Отключаем кэширование
export const revalidate = 0; // Не кэшируем

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'data', 'concerts.json');

        // Читаем файл каждый раз при запросе
        const fileData = fs.readFileSync(filePath, 'utf8');
        const concerts = JSON.parse(fileData);

        // Отключаем кэширование в headers
        const response = NextResponse.json(concerts);
        response.headers.set('Cache-Control', 'no-store, max-age=0');

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to load concerts' },
        );
    }
}
