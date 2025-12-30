import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, CircleCheckBig, CircleX } from 'lucide-react'

export function SummaryCards() {
  const stats = [
    {
      title: 'Total de coletas',
      value: '1200',
      description: '+20.1% do mês passado',
      icon: <Database className='h-5 w-5 text-black' />,
    },
    {
      title: 'Coletas sucedidas',
      value: '1000',
      description: '+84% de sucesso nas coletas',
      icon: <CircleCheckBig className='h-5 w-5 text-emerald-500' />,
    },
    {
      title: 'Coletas com falhas',
      value: '200',
      description: '+16% de falhas nas coletas',
      icon: <CircleX className='h-5 w-5 text-red-500' />,
    },
  ]

  return (
    <section className='w-full'>
      <h2 className='text-xl font-bold text-foreground mb-6'>Resumo</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {stats.map((item, index) => (
          <Card key={index} className='border shadow-sm rounded-xl px-0 py-5'>
            <CardHeader className='flex flex-row items-center justify-between'>
              <CardTitle className='text-base font-semibold text-gray-900'>
                {item.title}
              </CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-semibold tracking-tight text-black'>
                {item.value}
              </div>
              <p className='text-xs text-black mt-2'>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
