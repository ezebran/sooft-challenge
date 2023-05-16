export type questViewProps = {
    setSwitchView: (view: string) => void,
    questDescription: string,
    personQuest: personListTypes[],
    questId: number,
    questList: questListTypes[],
    setQuestList: (questList: questListTypes[]) => void
}

export type editViewProps = {
    setSwitchView: (view: string) => void,
    personQuest: personListTypes[],
    setPersonQuest: (personQuest: personListTypes[]) => void,
    questList: questListTypes[],
    setQuestList: (questList: questListTypes[]) => void,
    questId: number,
    questDescription: string
}

export type questListTypes = {
    id_cuestionario: number,
    descripcion_cuestionario: string
}

export type personListTypes = {
    id_person: string,
    firstName: string;
    lastName: string;
    whatsapp: string;
    email: string;
}


export type assignedQuestListTypes = {
    id_quest_assigned: number,
    id_person: string
}

export type questProps = {
    personList: personListTypes[],
    assignedQuestList: assignedQuestListTypes[],
    setAssignedQuestList: (assignedQuestList: assignedQuestListTypes[]) => void,
    questDescription: string,
    questId: number,
    questList: questListTypes[],
    setQuestList: (questList: questListTypes[]) => void
}



export type AddPersonFormProps = {
    setSwitchView: (view: string) => void,
    personList: personListTypes[],
    setAssignedQuestList: (assignedQuestList: assignedQuestListTypes[]) => void,
    questId: number,
    assignedQuestList: assignedQuestListTypes[]
}