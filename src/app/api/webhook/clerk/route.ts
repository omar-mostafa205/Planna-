import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs' // Crucial for Prisma in Next.js

export async function POST(req: Request) {
  try {
    // Verify Prisma is connected
    if (!prisma) {
      throw new Error('Prisma client not initialized')
    }

    const { data } = await req.json()
    
    if (!data) {
      return NextResponse.json(
        { error: "Missing required data" },
        { status: 400 }
      )
    }

    const email = data?.email_addresses?.[0]?.email_address
    const clerkUserId = data?.id

    if (!clerkUserId) {
      return NextResponse.json(
        { error: "User ID not found" },
        { status: 400 }
      )
    }

    // Transaction for reliability
    const profile = await prisma.$transaction(async (tx) => {
      return tx.profile.upsert({
        where: { userId: clerkUserId },
        create: {
          userId: clerkUserId,
          email,
          subscriptionActive: false,
          subscriptionTier: null,
          stripeSubscriptionId: null,
        },
        update: { email },
      })
    })

    return NextResponse.json(profile)

  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json(
      { 
        error: "Internal server error",
        details: process.env.NODE_ENV === 'development' 
      },
      { status: 500 }
    )
  }
}