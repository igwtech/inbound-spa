import type { ChartRepository } from '@/domain/chart/ChartRepository'
import type { Chart } from '@/domain/chart/Chart'

export class ChartService {
  constructor(private chartRepository: ChartRepository) {}

  getUptimeData(): Promise<Chart> {
    return this.chartRepository.getUptimeData()
  }

  getPostsData(): Promise<Chart> {
    return this.chartRepository.getPostsData()
  }

  getWebhooksData(): Promise<Chart> {
    return this.chartRepository.getWebhooksData()
  }
}
