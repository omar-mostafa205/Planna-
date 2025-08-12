export const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Get started with basic nutrition planning",
      features: [
        "Basic nutrition recommendations",
        "Limited InBody analysis",
        "Weekly insights",
        "Community support",
        "Basic meal suggestions"
      ],
      popular: false,
      variant: "ghost" as const,
      buttonText: "Get Started Free"
    },
    {
      name: "Basic",
      price: "$9.99",
      period: "month",
      description: "Perfect for getting started with AI nutrition planning",
      features: [
        "AI-powered nutrition plans",
        "Basic InBody analysis integration",
        "Weekly plan updates",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      variant: "outline" as const,
      buttonText: "Upgrade to Basic"
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "month",
      description: "Advanced features for serious health enthusiasts",
      features: [
        "Everything in Basic",
        "Advanced InBody insights",
        "Daily plan adjustments",
        "Priority support",
        "Custom meal preferences",
        "Progress analytics",
        "Export meal plans"
      ],
      popular: true,
      variant: "health" as const,
      buttonText: "Go Premium"
    }
  ];
  export const stripePriceIds: Record<string, string> = {
    basic: process.env.NEXT_PUBLIC_STRIPE_BASIC || '',
    premium: process.env.NEXT_PUBLIC_STRIPE_PREMIUM || ''
  };

  export const getPriceId = (name : string ) => {

    return stripePriceIds[name]
} 