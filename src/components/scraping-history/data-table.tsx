'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '../ui/badge'

export type LogData = {
  id: string
  date: string
  status: Status
  store: string
}

export function ScrapingHistoryTable({ data }: { data: LogData[] }) {
  const columns: ColumnDef<LogData>[] = [
    {
      accessorKey: 'id',
      header: 'Id',
      cell: ({ row }) => <div>{row.getValue('id')}</div>,
    },
    {
      accessorKey: 'date',
      header: 'Data',
      cell: ({ row }) => <div>{row.getValue('date')}</div>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.getValue('status') as Status
        const isSuccess = status === 'success'

        return (
          <Badge
            className={`
                px-4 py-1 rounded-full font-medium text-white border-none
                ${
                  isSuccess
                    ? 'bg-[#218838] hover:bg-[#1e7e34]'
                    : 'bg-[#D41010] hover:bg-[#b90e0e]'
                }
              `}
          >
            {status}
          </Badge>
        )
      },
    },
    {
      accessorKey: 'store',
      header: 'Loja',
      cell: ({ row }) => <div>{row.getValue('store')}</div>,
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      {/* VISUALIZAÇÃO MOBILE (CARDS) - Aparece apenas em telas menores que 'md' */}

      <div className='flex flex-col gap-3 md:hidden'>
        {data.map((item) => (
          <div
            key={item.id}
            className='rounded-lg border bg-white p-4 shadow-sm space-y-3'
          >
            <div className='flex justify-between items-center border-b pb-2'>
              <span className='text-[10px] font-bold uppercase text-gray-400'>
                ID
              </span>
              <span className='text-sm font-medium truncate max-w-[200px]'>
                {item.id}
              </span>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <span className='block text-[10px] font-bold uppercase text-gray-400'>
                  Data
                </span>
                <span className='text-sm'>{item.date}</span>
              </div>
              <div className='text-right'>
                <span className='block text-[10px] font-bold uppercase text-gray-400'>
                  Loja
                </span>
                <span className='text-sm'>{item.store}</span>
              </div>
            </div>

            <div className='flex justify-center pt-2'>
              <Badge
                className={`
                  w-full justify-center py-1 rounded-full font-medium text-white border-none uppercase text-[10px]
                  ${item.status === 'success' ? 'bg-[#218838]' : 'bg-[#D41010]'}
                `}
              >
                {item.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      <div className='rounded-md border bg-white hidden md:block'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className='hover:bg-transparent'>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className='font-semibold py-4 pl-6'
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className='border-b last:border-0'>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className='py-4 pl-6'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  Sem resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
