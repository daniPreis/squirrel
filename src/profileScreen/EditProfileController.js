import React from "react";
import UserView from "./EditProfileView";


class EditProfileController extends React.Component {
    state = {
        name: '',
        surname: '',
        email: '',
        birthdate: '',
        agegroup: '',
        street: '',
        housenumber: '',
        zIP: '',
        city: '',
        landlaneNumber: '',
        mobileNumber: '',
        status: '',
    };

    setName = (e) => {
        this.setState({name: e.target.value})
    };

    setSurname = (e) => {
        this.setState({surname: e.target.value})
    };

    setEmail = (e) => {
        this.setState({email: e.target.value})
    };

    setBirthdate = (e) => {
        this.setState({birthdate: e.target.value})
    };

    setAgegroup = (e) => {
        this.setState({agegroup: e.target.value})
    };

    setStreet = (e) => {
        this.setState({street: e.target.value})
    };

    setHouseNumber = (e) => {
        this.setState({housenumber: e.target.value})
    };

    setZIP = (e) => {
        this.setState({zIP: e.target.value})
    };

    setCity = (e) => {
        this.setState({city: e.target.value})
    };

    setLandlaneNumber = (e) => {
        this.setState({landlaneNumber: e.target.value})
    };

    setMobileNumber = (e) => {
        this.setState({mobileNumber: e.target.value})
    };

    setStatus = (e) => {
        this.setState({status: e.target.value})
    };

    confirmUser=(e)=>{

    }

    render() {

        return (
            <UserView className="ProfileView"
                      setName={this.setName}
                      setSurname={this.setSurname}
                      setEmail={this.setEmail}
                      setBirthdate={this.setBirthdate}
                      setAgegroup={this.setAgegroup}
                      setStreet={this.setStreet}
                      setHousenumber={this.setHouseNumber}
                      setZIP={this.setZIP}
                      setCity={this.setCity}
                      setLandlaneNumber={this.setLandlaneNumber}
                      setMobileNumber={this.setMobileNumber}
                      setStatus={this.setStatus}


                      name={this.state.name}
                      surname={this.state.surname}
                      email={this.state.email}
                      birthdate={this.state.birthdate}
                      agegroup={this.state.agegroup}
                      street={this.state.street}
                      housenumber={this.state.housenumber}
                      zIP={this.state.zIP}
                      city={this.state.city}
                      landlaneNumber={this.state.landlaneNumber}
                      mobileNumber={this.state.mobileNumber}
                      status={this.state.status}

                      confirmUser={this.confirmUser}
                      shouldDisableSubmit={!this.state.name || this.state.surname}
    />
    )
    }
}

export default EditProfileController