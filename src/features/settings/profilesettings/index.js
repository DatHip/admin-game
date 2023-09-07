import { useDispatch } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'
import { useState } from "react"
import Button from "../../../components/Button/Button"

function ProfileSettings(){
    const [id, setId] = useState()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    const handleChangeId  = e => {
        setId(e.value)   
    }

    const handleSearchUser = async () => {
        
    }

    return(
        <>
            <TitleCard title="Profile Settings" topMargin="mt-2">
                {/* Search  */}
    
                <div className="flex items-center gap-4 mb-2">
                 <InputText type="id" defaultValue={id} updateType="id" containerStyle="mt-4" labelTitle="User Id" updateFormValue={handleChangeId}/>
                 <div className="mt-14"><Button className="float-right btn btn-primary" onClick={() => updateProfile()}>Search</Button></div>
                </div>
                <div className="divider" ></div>


                <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
                    <InputText labelTitle="Name" defaultValue="Alex" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Email Id" defaultValue="alex@dashwind.com" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Title" defaultValue="UI/UX Designer" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Place" defaultValue="California" updateFormValue={updateFormValue}/>
                    <TextAreaInput labelTitle="About" defaultValue="Doing what I love, part time traveller" updateFormValue={updateFormValue}/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Timezone" defaultValue="IST" updateFormValue={updateFormValue}/>
                    <ToogleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} updateFormValue={updateFormValue}/>
                </div>

                <div className="mt-16"><button className="float-right btn btn-primary" onClick={() => updateProfile()}>Update</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings