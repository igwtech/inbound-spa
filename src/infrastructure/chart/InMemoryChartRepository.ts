import type { ChartRepository } from '@/domain/chart/ChartRepository'
import type { Chart } from '@/domain/chart/Chart'
import chartData from '@/data/chartData.json'

export class InMemoryChartRepository implements ChartRepository {
  getUptimeData(): Promise<Chart> {
    return Promise.resolve(chartData.uptimeData)
  }

  getPostsData(): Promise<Chart> {
    return Promise.resolve(chartData.postsData)
  }

  getWebhooksData(): Promise<Chart> {
    return Promise.resolve(chartData.webhooksData)
  }
}
