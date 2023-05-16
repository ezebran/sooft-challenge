import { personFormProps } from "./PersonForm.types"
import { personListTypes } from "../quest/Quest.types";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function PersonForm({setPersonList, personList}:personFormProps) {

    const [formData, setFormData] = React.useState<personListTypes>({
        id_person: "",
        firstName: "",
        lastName: "",
        whatsapp: "",
        email: "",
      });
    
    const [phoneError, setPhoneError] = React.useState<boolean>(false)
    const [emailError, setEmailError] = React.useState<boolean>(false)
    const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

    React.useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;
      if (isSuccess) {
        timer = setTimeout(() => {
          setIsSuccess(false);
        }, 1000);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [isSuccess]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      // Validations
      const isValidPhoneNumber = /^\d{10}$/.test(formData.whatsapp);
      const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email);
  
      if (!isValidPhoneNumber) {
        setPhoneError(true)
      }else{
        setPhoneError(false)
 
      }
  
      if (!isValidEmail) {
        setEmailError(true)
      }else{
        setEmailError(false)

      }

      if(isValidPhoneNumber && isValidEmail){
        // Create new person object with form data
        const newPerson = {
          id_person: uuidv4(),
          firstName: formData.firstName,
          lastName: formData.lastName,
          whatsapp: formData.whatsapp,
          email: formData.email,
        };
    
        // Add new person to list
        setPersonList([...personList, newPerson]);
    
        // Clear form data
        setFormData({
          id_person: "",
          firstName: "",
          lastName: "",
          whatsapp: "",
          email: "",
        });

        setIsSuccess(true)
      }
    };

    return (
      <form onSubmit={handleFormSubmit} className="bg-white w-72 h-80 rounded-xl shadow-lg shadow-gray-500/50 flex flex-col p-6 justify-between">
        <h3 className="text-gray-900 font-semibold mb-4">Agregar una persona</h3>
        <p className={`${isSuccess ? "flex text-green-600 text-[12px]" : "hidden"}`}>Se agrego la persona exitosamente.</p>
        <div className="flex flex-row justify-between w-full gap-1">
        <input
          type="text"
          placeholder="Nombre.."
          className="w-[50%] border border-slate-300 px-4 py-2 rounded-lg text-sm"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Apellido.."
          className="w-[50%] border border-slate-300 px-4 py-2 rounded-lg text-sm"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>
      <input
        type="text"
        placeholder="Whatsapp.."
        className="w-full border border-slate-300 px-4 py-2 rounded-lg text-sm"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleInputChange}
      />
      {phoneError ? <p className="text-[12px] text-red-800">El número de teléfono no es válido</p> : ""}
      <input
        type="text"
        placeholder="Email.."
        className="w-full border border-slate-300 px-4 py-2 rounded-lg text-sm"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {emailError ? <p className="text-[12px] text-red-800">El correo electrónico no es válido</p> : ""}
        <button type="submit" className="w-full px-4 py-2 rounded-lg text-sm bg-orange-200 font-semibold hover:bg-orange-300 transition-all">
            Agregar
        </button>
      </form>
    )
}
  