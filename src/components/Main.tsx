import Quest from "./quest/Quest"
import PersonForm from "./PersonForm/PersonForm"
import { questListTypes, personListTypes, assignedQuestListTypes } from "./quest/Quest.types"
import data from "./../data/questData.json";
import React from 'react'

export default function Main() {

    const [personList, setPersonList] = React.useState<personListTypes[]>([])
    const [questList, setQuestList] = React.useState<questListTypes[]>([])
    const [assignedQuestList , setAssignedQuestList] = React.useState<assignedQuestListTypes[]>([])

    React.useEffect(()=>{
      if(!questList.length){
        setQuestList(data)
      }
    },[questList])

    return (
      <div className="py-4 px-[5%] flex flex-row gap-4 flex-wrap">
        <PersonForm
            setPersonList={setPersonList}
            personList={personList}
        />
        {
          questList.map((quest)=>(
            <Quest
              key={quest.id_cuestionario}
              questId={quest.id_cuestionario}
              questDescription={quest.descripcion_cuestionario}
              personList={personList}
              setAssignedQuestList={setAssignedQuestList}
              assignedQuestList={assignedQuestList}
              setQuestList={setQuestList}
              questList={questList}
            />
          ))
        }

      </div>
    )
}  