import { personListTypes } from "../quest/Quest.types"

export type personFormProps = {
    setPersonList: ([]:personListTypes[]) => void,
    personList: personListTypes[]
}