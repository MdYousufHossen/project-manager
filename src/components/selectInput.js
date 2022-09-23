import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import down from "../assets/images/down.png"
import { teamInputSelect } from '../features/project/projectSlice'
import { useGetAllTeamsQuery } from '../features/team/teamApi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectInput({opened}) {
    const dispatch=useDispatch()
    const {data:peoples}=useGetAllTeamsQuery()
    const [selected, setSelected] = useState({})

useEffect(()=>{
   dispatch(teamInputSelect(selected)) 
},[selected,dispatch])
useEffect(()=>{
 if(peoples?.length>0){
  setSelected(peoples[0])
 }
},[peoples])
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default border border-gray-300 bg-white py-2  pl-3  text-left shadow-sm focus:border-indigo-500 focus:outline-none  focus:ring-indigo-500 sm:text-sm">
              <span className="flex justify-between items-center">
                <span className=" block truncate">{selected?.name}</span>
                <img src={down} alt="" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {peoples?.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person?.name}
                          </span>
                        </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}