import React from "react"
import { AddPersonFormProps } from "../Quest.types"

export default function AddPersonForm({setSwitchView, personList, setAssignedQuestList, questId, assignedQuestList}: AddPersonFormProps) {

    const [personSelected, setPersonSelected] = React.useState<string>("")

    const backToQuest = () => {
        setSwitchView("quest-view")
    }

    const assignPerson = () => {
        const newPerson = {
            id_quest_assigned: questId,
            id_person: personSelected
        }

        setAssignedQuestList([...assignedQuestList, newPerson]);
        setSwitchView("quest-view");
    }

    return (
        <>
            <h3 className="font-semibold text-slate-700">Asignar una persona al cuestionario</h3>
            <div className="h-full pt-4 flex flex-col justify-between">
                {
                    personList.length ?
                    <select onChange={ e => setPersonSelected(e.target.value)} className="w-full border border-slate-300 px-4 py-2 rounded-lg text-sm">
                        <option>Seleccione una persona</option>
                        {
                            personList.map((person)=>(
                                <option value={person.id_person} key={person.id_person}>{person.firstName} {person.lastName}</option>
                            ))
                        }
                    </select>
                :
                    <p className="text-red-500 font-semibold">No hay personas para asignar al cuestionario.</p>
                }
                <div className="flex flex-row w-full justify-between">
                    <button className="text-cyan-600 bg-white py-2 px-4 rounded text-sm font-semibold" onClick={assignPerson}>Asignar</button>
                    <button className="text-slate-800 bg-white py-1 px-2 rounded text-sm font-semibold" onClick={backToQuest}>Cancelar</button>      
                </div>
            </div>
        </>
    )
  }
  