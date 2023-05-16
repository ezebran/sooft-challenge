import { editViewProps, personListTypes } from "../Quest.types"
import React from 'react';

export default function EditForm({setSwitchView, personQuest, setPersonQuest, setQuestList, questList, questId, questDescription}: editViewProps) {

    const [questPersons, setQuestPersons] = React.useState<personListTypes[]>([]);
    const [newDescription, setNewDescription] = React.useState<string>("");

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewDescription(event.target.value);
    };

    const backToQuest = () => {
        setSwitchView("quest-view")
    }

    const deletePerson = (event: React.MouseEvent<HTMLSpanElement>, id: string) => {
        event.preventDefault();
        const deletePerson = questPersons.filter((person)=> person.id_person !== id);
        setPersonQuest(deletePerson);
        setQuestPersons(deletePerson);
    }

    const saveChanges = () => {
        const updatedQuestList = questList.map((quest) => {
            if (quest.id_cuestionario === questId) {
              return { ...quest, descripcion_cuestionario: newDescription };
            }
            return quest;
          });
          setQuestList(updatedQuestList)
          setSwitchView("quest-view")
    }

    React.useEffect(()=>{
        setQuestPersons(personQuest)
    },[questPersons])

    return (
        <>
            <h3 className="font-semibold text-slate-700">Editar datos del cuestionario</h3>
            <div className="h-full pt-4 flex flex-col gap-2">
                <input type="text" placeholder={questDescription} className="w-full border border-slate-300 px-4 py-2 rounded-lg text-sm" onChange={handleDescriptionChange} />
                <div className="flex flex-row gap-2 flex-wrap h-32 overflow-auto">
                {
                    questPersons.length ?
                    questPersons.map((person)=>(
                        <span key={person.id_person} className="h-fit uppercase text-[12px] font-semibold bg-orange-400 text-orange-100 px-4 py-1 rounded-full flex flex-row items-center gap-2">
                            {person.firstName} {person.lastName}
                            <span className="bg-white text-orange-400 rounded-full w-4 h-4 text-sm flex justify-center items-center lowercase cursor-pointer" onClick={(event) => deletePerson(event, person.id_person)}>x</span>
                        </span>
                    ))
                :
                    <p className="text-sm">Sin personas asignadas..</p>
                }
            </div>
            </div>
            <div className="flex flex-row w-full justify-between">
                <button className="text-cyan-600 bg-white py-2 px-4 rounded text-sm font-semibold" onClick={saveChanges}>Guardar</button>
                <button className="text-slate-800 bg-white py-1 px-2 rounded text-sm font-semibold" onClick={backToQuest}>Cancelar</button>      
            </div>
        </>
    )
  }
  