import React from 'react'
import Input from "../../UI/Input";

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
                <div className="profileStatus">
                    <label>
                        <input type="radio" value="active" checked={true}/>
                        Aktiv
                    </label>
                </div>
                <div className="profileStatus">
                    <label>
                        <input type="radio" value="inactive"/>
                        Inactive
                    </label>
                </div>
            </form>)


    }
}

export default Form