import React from "react";
import Form from "./Form/Form";

class EditProfileView extends React.Component {
    render() {
        const {

            setName,
            setSurname,
            setEmail,
            setBirthdate,
            setAgegroup,
            setStreet,
            setHousenumber,
            setZIP,
            setCity,
            setLandlaneNumber,
            setMobileNumber,
            setStatus,


            name,
            surname,
            email,
            birthdate,
            agegroup,
            street,
            housenumber,
            zIP,
            city,
            landlaneNumber,
            mobileNumber,
            status,

            confirmUser,
            shouldDisableSubmit

        } = this.props

        return (
            <React.Fragment>
                <Form
                    OnInputChangeName={setName}
                    OnInputChangeSurname={setSurname}
                    OnInputChangeEmail={setEmail}
                    OnInputChangeBirthdate={setBirthdate}
                    OnInputChangeAgegroup={setAgegroup}
                    OnInputChangeStreet={setStreet}
                    OnInputChangeNumber={setHousenumber}
                    OnInputChangeZIP={setZIP}
                    OnInputChangeCity={setCity}
                    OnInputChangeLandlaneNumb={setLandlaneNumber}
                    OnInputChangeMobilePhoneNumb={setMobileNumber}
                    OnInputChangeStatus={setStatus}

                    inputValueName={name}
                    inputValueSurname={surname}
                    inputValueEmail={email}
                    inputValueBirthdate={birthdate}
                    inputValueAgegroup={agegroup}
                    inputValueStreet={street}
                    inputValueNumber={housenumber}
                    inputValueZIP={zIP}
                    inputValueCity={city}
                    inputValueLandlaneNumb={landlaneNumber}
                    inputValueMobilePhoneNumb={mobileNumber}
                    inputValueStatus={status}

                    onSubmit={confirmUser}
                    shouldDisableSubmit={shouldDisableSubmit}
                />

            </React.Fragment>
        )
    }
}

export default EditProfileView