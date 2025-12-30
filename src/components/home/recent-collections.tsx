import { Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Collection = {
  id: string
  date: string
  status: 'Sucesso' | 'Falhou'
}

const recentData: Collection[] = [
  { id: '1', date: 'Hoje - 6:00', status: 'Falhou' },
  { id: '2', date: 'Ontem - 6:00', status: 'Sucesso' },
  { id: '3', date: '17/12 - 6:00', status: 'Sucesso' },
  { id: '4', date: '16/12 - 6:00', status: 'Sucesso' },
  { id: '5', date: '15/12 - 6:00', status: 'Sucesso' },
  { id: '6', date: '14/12 - 6:00', status: 'Sucesso' },
  { id: '7', date: '13/12 - 6:00', status: 'Falhou' },
  { id: '8', date: '12/12 - 6:00', status: 'Falhou' },
]

export function RecentCollections() {
  return (
    <Card className='border rounded-xl h-full px-0 gap-6'>
      <CardHeader>
        <CardTitle className='text-lg font-bold'>Últimas coletas</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-6 py-0'>
        {recentData.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between bg-slate-100/50 rounded-lg border border-transparent hover:border-slate-100 transition-colors p-2'
          >
            <div className='flex items-center gap-2'>
              <Clock className='h-5 w-5 text-black' />
              <span className='font-bold text-sm md:text-base'>
                {item.date}
              </span>
            </div>

            <Badge
              className={`
                px-4 py-1 rounded-full font-medium text-white border-none
                ${
                  item.status === 'Sucesso'
                    ? 'bg-[#218838] hover:bg-[#1e7e34]'
                    : 'bg-[#D41010] hover:bg-[#b90e0e]'
                }
              `}
            >
              {item.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
