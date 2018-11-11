import React from 'react'
import Input from "../../UI/Input";
import ConfirmButton from "../../UI/Confirmbutton";
import Radiobutton from "../../UI/Radiobutton";

class Form extends React.Component {

    render() {
        const {

            OnInputChangeStatus,
            OnInputChangeName,
            OnInputChangeSurname,
            OnInputChangeEmail,
            OnInputChangeBirthdate,
            OnInputChangeAgegroup,
            OnInputChangeStreet,
            OnInputChangeNumber,
            OnInputChangeZIP,
            OnInputChangeCity,
            OnInputChangeLandlaneNumb,
            OnInputChangeMobilePhoneNumb,

            inputValueName,
            inputValueSurname,
            inputValueEmail,
            inputValueBirthdate,
            inputValueAgegroup,
            inputValueStreet,
            inputValueNumber,
            inputValueZIP,
            inputValueCity,
            inputValueLandlaneNumb,
            inputValueMobilePhoneNumb,
            inputValueStatus,

            onSubmit,
            onShow,
            shouldDisableSubmit
        } = this.props

        return (
            <form className={"userForm"}>

                <label className={"status"}>Aktiv</label>
                <Radiobutton id={"status"}
                             value={inputValueStatus}
                             onChange={OnInputChangeStatus}
                />
                <br/>
                <label className={"name"}>Name:</label>
                <Input placeholder={"Name eingeben"}
                       value={inputValueName}
                       onChange={OnInputChangeName} id={"name"}/>
                <br/>
                <label className={"surName"}>Nachname:</label>
                <Input placeholder={"Nachname eingeben"}
                       value={inputValueSurname}
                       onChange={OnInputChangeSurname} id={"surname"}/>
                <br/>
                <label className={"eMail"}>E-Mail Adresse:</label>
                <Input placeholder={"E-Mailadresse eingeben: "}
                       value={inputValueEmail}
                       onChange={OnInputChangeEmail} id={"eMail"}/>
                <br/>
                <label className={"birthdate"}>Geburtsdatum:</label>
                <Input placeholder={"Geburtsdatum eingeben"}
                       value={inputValueBirthdate}
                       onChange={OnInputChangeBirthdate} id={"birthdate"}/>
                <br/>
                <label className={"ageGroup"}>Altersgruppe:</label>
                <Input placeholder={"Altersgruppe eingeben"}
                       value={inputValueAgegroup}
                       onChange={OnInputChangeAgegroup} id={"ageGroup"}/>
                <br/>
                <label className={"street"}>Straße:</label>
                <Input placeholder={"Straße eingeben"}
                       value={inputValueStreet}
                       onChange={OnInputChangeStreet} id={"street"}/>
                <br/>
                <label className={"houseNumber"}>Hausnummer:</label>
                <Input placeholder={"Hausnummer eingeben"}
                       value={inputValueNumber}
                       onChange={OnInputChangeNumber} id={"houseNumber"}/>
                <br/>
                <label className={"zIP"}>Postleitzahl:</label>
                <Input placeholder={"PLZ eingeben"}
                       value={inputValueZIP}
                       onChange={OnInputChangeZIP} id={"zIP"}/>
                <br/>
                <label className={"city"}>Stadt:</label>
                <Input placeholder={"Stadt eingeben"}
                       value={inputValueCity}
                       onChange={OnInputChangeCity} id={"city"}/>
                <br/>
                <label className={"landlane"}>Festnetznummer:</label>
                <Input placeholder={"Festnetznummer eingeben"}
                       value={inputValueLandlaneNumb}
                       onChange={OnInputChangeLandlaneNumb} id={"landlane"}/>
                <br/>
                <label className={"mobile"}>Mobilfunknummer:</label>
                <Input placeholder={"Mobilfunknummer eingeben"}
                       value={inputValueMobilePhoneNumb}
                       onChange={OnInputChangeMobilePhoneNumb} id={"mobile"}/>
                <br/>
                <ConfirmButton
                    onClick={onSubmit}
                    disabled={shouldDisableSubmit}
                >
                    Bestätigen
                </ConfirmButton>


            </form>
        )


    }
}

export default Form