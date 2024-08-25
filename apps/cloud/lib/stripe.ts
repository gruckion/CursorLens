import Stripe from "stripe";

import { env } from "@/env";

// TODO setup stripe
export const stripe = new Stripe(env.STRIPE_API_KEY ?? "", {
  apiVersion: "2024-04-10",
  typescript: true,
});
