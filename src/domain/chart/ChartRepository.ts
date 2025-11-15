import type { Chart } from './Chart'

export interface ChartRepository {
  getUptimeData(): Promise<Chart>
  getPostsData(): Promise<Chart>
  getWebhooksData(): Promise<Chart>
}
