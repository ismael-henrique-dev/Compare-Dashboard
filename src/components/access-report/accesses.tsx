'use client'

import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {
  visits: {
    label: 'Acessos',
    color: '#15803d',
  },
} satisfies ChartConfig

export function AccessLineChart() {
  const CHART_DATA = [
    { date: '2025-12-23', visits: 245 },
    { date: '2025-12-24', visits: 189 },
    { date: '2025-12-25', visits: 120 },
    { date: '2025-12-26', visits: 310 },
    { date: '2025-12-27', visits: 420 },
    { date: '2025-12-28', visits: 380 },
    { date: '2025-12-29', visits: 450 },
    { date: '2025-12-30', visits: 490 },
    { date: '2025-12-31', visits: 310 },
    { date: '2026-01-01', visits: 150 },
    { date: '2026-01-02', visits: 280 },
    { date: '2026-01-03', visits: 340 },
    { date: '2026-01-04', visits: 390 },
    { date: '2026-01-05', visits: 410 },
    { date: '2026-01-06', visits: 380 },
    { date: '2026-01-07', visits: 420 },
    { date: '2026-01-08', visits: 450 },
    { date: '2026-01-09', visits: 475 },
  ]

  return (
    <Card className='py-0 pt-6'>
      <CardHeader>
        <CardTitle className='text-lg font-semibold'>
          Total de acessos no período selecionado
        </CardTitle>
      </CardHeader>
      <CardContent className='p-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-75  w-full'
        >
          <LineChart data={CHART_DATA}>
            <CartesianGrid strokeDasharray='3 3' className='stroke-muted/50' />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                const date = new Date(value + 'T00:00:00')
                const month = date.toLocaleDateString('pt-BR', {
                  month: 'short',
                })

                // 1. Remove o ponto final (.replace('.', ''))
                // 2. Transforma a primeira letra em maiúscula
                const formattedMonth = month.replace('.', '')
                return (
                  formattedMonth.charAt(0).toUpperCase() +
                  formattedMonth.slice(1)
                )
              }}
              className='text-xs text-muted-foreground'
            />
            <ChartTooltip
              cursor={{ stroke: '#15803d', strokeWidth: 1 }}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value + 'T00:00:00').toLocaleDateString(
                      'pt-BR',
                      {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      }
                    )
                  }}
                />
              }
            />
            <Line
              dataKey='visits'
              type='monotone'
              stroke='var(--color-visits)'
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
