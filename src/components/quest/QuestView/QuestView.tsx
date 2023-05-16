import { questViewProps, personListTypes } from "../Quest.types";
import React from 'react';

export default function QuestView({setSwitchView, questDescription, personQuest, setQuestList, questList, questId}: questViewProps) {

    const [questPersons, setQuestPersons] = React.useState<personListTypes[]>([]);

    const questDelete = () => {
        const deleteQuest = questList.filter((quest) => quest.id_cuestionario !== questId)
        setQuestList(deleteQuest)
    }
    
    const goToEditForm = () => {
        setSwitchView("edit-form")
    }

    const goToAddPerson = () => {
        setSwitchView("add-person")
    }


    React.useEffect(()=>{
        setQuestPersons(personQuest)
    },[questPersons])

    return (
      <>
        <div className="flex flex-row justify-between">
            <button className="text-yellow-500 bg-white py-1 px-2 rounded text-[12px] font-semibold" onClick={goToEditForm}>
                EDITAR
            </button>
            <button className="text-red-500 bg-white py-1 px-2 rounded text-[12px] font-semibold" onClick={questDelete}>
                ELIMINAR
            </button>
        </div>
        <div className="h-full pt-4 flex flex-col gap-2">
            <h3 className="font-semibold text-slate-700">{questDescription}</h3>
            
            <div className="flex flex-row gap-2 flex-wrap h-32 overflow-auto">
                {
                    questPersons.length ?
                    questPersons.map((person)=>(
                        <span key={person.id_person} className="h-fit uppercase text-[12px] font-semibold bg-orange-400 text-orange-100 px-4 py-1 rounded-full flex flex-row items-center gap-2">
                            {person.firstName} {person.lastName}
                        </span>
                    ))
                :
                    <p className="text-sm">Sin personas asignadas..</p>
                }
            </div>
        </div>
        <button className="text-sm text-cyan-600 font-semibold" onClick={goToAddPerson}>
            + Asignar una persona
        </button>
      </>
    )
  }
  