import EditForm from "./EditForm/EditForm"
import QuestView from "./QuestView/QuestView"
import AddPersonForm from "./AddPersonForm/AddPersonForm"
import { questProps, personListTypes } from "./Quest.types"

import React from 'react'

export default function Quest({personList, setAssignedQuestList, assignedQuestList, questId, questDescription, setQuestList, questList}:questProps) {

    const [switchView, setSwitchView] = React.useState<string>("quest-view")
    const [personQuest, setPersonQuest] = React.useState<personListTypes[]>([]);

    const questIds:any  = assignedQuestList.filter((quest) => quest.id_quest_assigned === questId) 
    const personsFilter = personList.filter((person)=>questIds.some((questPers:any)=> questPers.id_person === person.id_person))

    React.useEffect(()=>{
      setPersonQuest(personsFilter)
  },[assignedQuestList])

    return (
      <div className="bg-orange-200 w-72 h-80 rounded-xl shadow-lg shadow-gray-500/50 flex flex-col p-6 justify-between">
        {
            switchView === "quest-view" ?
                <QuestView 
                  setSwitchView={setSwitchView} 
                  questDescription={questDescription} 
                  personQuest={personQuest} 
                  setQuestList={setQuestList} 
                  questList={questList} 
                  questId={questId}
                 />
            : switchView === "edit-form" ?
                <EditForm 
                  setSwitchView={setSwitchView}
                  personQuest={personQuest} 
                  setPersonQuest={setPersonQuest} 
                  questDescription={questDescription} 
                  questList={questList} 
                  setQuestList={setQuestList} 
                  questId={questId} 
                />
            : 
                <AddPersonForm 
                  setSwitchView={setSwitchView} 
                  personList={personList} 
                  setAssignedQuestList={setAssignedQuestList} 
                  assignedQuestList={assignedQuestList} 
                  questId={questId} 
                />
        }
        
      </div>
    )
  }
  