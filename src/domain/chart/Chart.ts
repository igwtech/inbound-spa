export interface Chart {
  labels: string[]
  datasets: {
    label?: string
    backgroundColor: string | string[]
    data: number[]
  }[]
}
