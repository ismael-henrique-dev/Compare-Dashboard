'use client'

import { Bar, BarChart, XAxis, YAxis } from 'recharts'

import { Card, CardContent } from '@/components/ui/card'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

// Dados estruturados para barras duplas (ex: Sucesso vs Falha)
const chartData = [
  { month: 'Jul', success: 120, failure: 45 },
  { month: 'Aug', success: 70, failure: 82 },
  { month: 'Set', success: 102, failure: 78 },
  { month: 'Out', success: 105, failure: 23 },
  { month: 'Nov', success: 45, failure: 112 },
]

const chartConfig = {
  success: {
    label: 'Sucesso',
    color: '#166534', // Verde escuro da imagem
  },
  failure: {
    label: 'Falha',
    color: '#D41010', // Vermelho da imagem
  },
} satisfies ChartConfig

export function ScrapingSummaryChart() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig} className='w-full'>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
          >
            {/* Eixo Y para mostrar a escala de números (0, 30, 60...) */}
            <YAxis
              tickLine={false}
              axisLine={false}
              fontSize={12}
              tickMargin={10}
            />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={12}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            {/* Primeira Barra: Sucesso (Verde) */}
            <Bar
              dataKey='success'
              fill='var(--color-success)'
              radius={[4, 4, 0, 0]} // Arredondado apenas em cima
              barSize={35}
            />

            {/* Segunda Barra: Falha (Vermelho) */}
            <Bar
              dataKey='failure'
              fill='var(--color-failure)'
              radius={[4, 4, 0, 0]} // Arredondado apenas em cima
              barSize={35}
            />

            <ChartLegend content={<ChartLegendContent payload={undefined} />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
