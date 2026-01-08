import { DatePicker, SelectStatus, SelectStores } from '../ui/filters'
import { Label } from '../ui/label'

export function StudentsFilters() {
  return (
    <div className='w-full grid lg:grid-cols-[2fr_2fr_1fr] gap-2'>
      <div className='grid gap-1'>
        <Label>Loja</Label>
        <SelectStores />
      </div>
      <div className='grid gap-1'>
        <Label>Status</Label>
        <SelectStatus />
      </div>
      <div className='grid gap-1'>
        <Label>Data</Label>
        <DatePicker />
      </div>
    </div>
  )
}
