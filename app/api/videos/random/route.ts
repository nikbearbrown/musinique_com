import { sql } from "@/lib/db"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const rows = await sql`
      SELECT youtube_id, title FROM videos
      WHERE published = true
      ORDER BY RANDOM() LIMIT 1
    `
    if (rows[0]) {
      return NextResponse.json({ youtube_id: rows[0].youtube_id, title: rows[0].title })
    }
    return NextResponse.json({ youtube_id: "edxXeLcW8p0", title: "Musinique Introduction" })
  } catch {
    return NextResponse.json({ youtube_id: "edxXeLcW8p0", title: "Musinique Introduction" })
  }
}
