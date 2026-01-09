'use client'

import * as React from 'react'
import { Label, Pie, PieChart } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const pieData = [
  { page: 'home', visitors: 450, fill: '#1d70b8' },
  { page: 'precos', visitors: 300, fill: '#f4770b' },
  { page: 'sobre', visitors: 200, fill: '#28a197' },
  { page: 'blog', visitors: 175, fill: '#d4351c' },
]

// O segredo está aqui: as chaves do config devem ser os valores de 'page'
const chartConfig = {
  visitors: { label: 'Visitantes' },
  home: { label: 'Home', color: '#1d70b8' },
  precos: { label: 'Preços', color: '#f4770b' },
  sobre: { label: 'Sobre', color: '#28a197' },
  blog: { label: 'Blog', color: '#d4351c' },
} satisfies ChartConfig

export function PageDistributionChart() {
  const totalVisitors = React.useMemo(() => {
    return pieData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className='flex flex-col '>
      <CardHeader className='pb-0 px-6'>
        <CardTitle className='text-lg font-bold'>
          Distribuição por página
        </CardTitle>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[350px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieData}
              dataKey='visitors'
              nameKey='page' // Link com as chaves do chartConfig
              innerRadius={70}
              outerRadius={100}
              strokeWidth={0}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-4xl font-bold'
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground text-xs font-medium uppercase tracking-widest'
                        >
                          visitantes
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey='page' />}
              className='flex-wrap gap-x-4 gap-y-2 justify-center mt-4'
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}