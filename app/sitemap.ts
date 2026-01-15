import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/services/customer-service", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/order-taking", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/telemarketing", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/appointment-setting", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/technical-support", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/cross-upselling", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/market-research", priority: 0.7, changeFrequency: "monthly" },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
