import { Card } from '../ui/card'
import { DatePicker } from '../ui/filters'

export function Summary() {
  return (
    <Card className='px-6 flex flex-row justify-between'>
      <div>
        <h1 className='text-xl font-bold text-gray-900'>Relatório de acesso</h1>
        <p className='text-sm text-neutral-500 mt-1'>
          Período: 12/12/2024 - 31/12/2024
        </p>
      </div>

      <div className='w-full md:w-64 gap-2'>
        <label htmlFor='date-picker' className='text-sm font-semibold mb-2'>Período:</label>
        <DatePicker />
      </div>
    </Card>
  )
}
