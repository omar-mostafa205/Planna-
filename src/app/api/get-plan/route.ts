// Create a new API route: /app/api/meal-plan/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { userId } = await auth();
  
  if (!userId) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: { userId },
      select: { mealPlan: true }
    });

    if (!profile || !profile.mealPlan) {
      return NextResponse.json(
        { error: "No meal plan found" },
        { status: 404 }
      );
    }

    return NextResponse.json(profile.mealPlan);
  } catch (error) {
    console.error("Failed to fetch meal plan:", error);
    return NextResponse.json(
      { error: "Failed to fetch meal plan" },
      { status: 500 }
    );
  }
}