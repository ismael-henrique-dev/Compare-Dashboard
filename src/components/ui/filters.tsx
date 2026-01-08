'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'

const stores = [
  { id: 'all', name: 'Todas as lojas' },
  { id: 'kabum', name: 'Kabum' },
  { id: 'terabyte', name: 'Terabyte' },
  { id: 'pichau', name: 'Pichau' },
  { id: 'aliexpress', name: 'AliExpress' },
]

const status = [
  { id: 'all', name: 'Todos os status' },
  { id: 'success', name: 'Sucesso' },
  { id: 'error', name: 'Erro' },
  { id: 'pending', name: 'Pendente' },
  { id: 'processing', name: 'Processando' },
]

export function SelectStores() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const defaultValue = searchParams.get('store') || 'all'
  const [selected, setSelected] = useState(defaultValue)

  const selectedStore =
    stores.find((s) => s.id === selected)?.name || 'Escolha a loja'

  const handleSelectStore = (option: string) => {
    setSelected(option)
    const params = new URLSearchParams(searchParams)

    if (option && option !== 'all') {
      params.set('store', option)
    } else if (option === 'all') {
      params.delete('store')
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    })
  }

  return (
    <Select value={selected} onValueChange={handleSelectStore}>
      <SelectTrigger className='w-full cursor-pointer'>
        <SelectValue placeholder='Escolha a loja'>{selectedStore}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {stores.map((store) => (
          <SelectItem
            className='cursor-pointer w-full'
            key={store.id}
            value={store.id}
          >
            {store.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function SelectStatus() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const defaultValue = searchParams.get('belt') || 'all'
  const [selected, setSelected] = useState(defaultValue)

  const selectedStatus =
    status.find((s) => s.id === selected)?.name || 'Escolha o status'

  const handleSelectStatus = (option: string) => {
    setSelected(option)
    const params = new URLSearchParams(searchParams)

    if (option && option !== 'all') {
      params.set('status', option)
    } else if (option === 'all') {
      params.delete('status')
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    })
  }

  return (
    <Select value={selected} onValueChange={handleSelectStatus}>
      <SelectTrigger className='w-full cursor-pointer'>
        <SelectValue placeholder='Escolha a loja' className='w-full'>
          {selectedStatus}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {status.map((status) => (
          <SelectItem
            className='cursor-pointer'
            key={status.id}
            value={status.id}
          >
            {status.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function DatePicker() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const defaultValue = searchParams.get('date')

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : undefined
  )

  const handleSelectDate = (selected?: Date) => {
    // if (!selected) return

    if (selected! > today) return

    setDate(selected)

    const params = new URLSearchParams(searchParams)

    if (selected) {
      const formatted = format(selected, 'yyyy-MM-dd')
      params.set('date', formatted)
    } else {
      params.delete('date')
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className='flex flex-col gap-2 w-full'>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className='justify-start text-left font-normal w-full'
          >
            {date
              ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
              : 'Escolher data'}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className='w-[var(--radix-popover-trigger-width)] p-0 sm:max-w-sm sm:rounded-md'
          align='start'
        >
          <Calendar
            mode='single'
            selected={date}
            onSelect={handleSelectDate}
         
            className='w-full'
            locale={ptBR}
            disabled={{
              after: today, // bloqueia datas futuras
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
