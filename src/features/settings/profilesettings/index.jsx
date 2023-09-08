import { useDispatch } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import InputText from '../../../components/Input/InputText'
import { useState } from "react"
import Button from "../../../components/Button/Button"
import { apiGet, apiPost } from "../../../utils/https/request"
import { tmpAPI } from "../../../utils/https/tmpApi"
import ReactJson from "react-json-view"
import { toast } from "react-hot-toast"


function ProfileSettings(){
    const [id, setId] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingUpdate, setLoadingUpdate] = useState(false)
    const [data,setData] = useState(null)
    

    const handleChangeId  = e => {
        setId(e.value)   
    }

    const handleSearchUser = async () => {
        if(id.length === 0) return
        setLoading(true)
        try {
            const res = await apiGet(tmpAPI.getProfile + id)
            if (res?.error === 0) {
               setData(res?.data) 
            }
        } catch (error) {
            
        }
        setLoading(false)
    }

   const handleUpdateProfile = async () => {
       setLoadingUpdate(true)
        try {
            const res = await apiPost(tmpAPI.updateProfile , data)
            if(res?.error === 0 ) {
                toast.success('Update Success')
            }

        } catch (error) {
            
        }
        setLoadingUpdate(false)
   }
    
    return(
        <>
            <TitleCard title="Profile" topMargin="mt-2">
                {/* Search  */}
    
                <div className="flex items-center gap-4 mb-2">
                 <InputText type="id" defaultValue={id} updateType="id" containerStyle="mt-4" labelTitle="User Id" updateFormValue={handleChangeId}/>
                 <div className="mt-14"><Button loading={loading} className="float-right btn btn-primary" onClick={handleSearchUser}>Search</Button></div>
                </div>
                <div className="divider" ></div>
                {data && (
                    <>  
                <label className="label">
                            <span className={"label-text text-base-content " }>Profile</span>
                        </label>
                    <ReactJson
                     onEdit={(edit)=>{
                        setData(edit?.updated_src)
                    }}
                    onAdd={(edit)=>{
                        setData(edit?.updated_src)
                    }}
                    onDelete={(edit)=>{
                        setData(edit?.updated_src)
                    }}
                    style={{
                        fontSize: 16,
                        padding: 20,
                    }}
                    iconStyle={'triangle'}
                    displayObjectSize={false}
                     displayDataTypes={false} src={data} theme="ashes" />
                
                <div className="mt-16"><Button loading={loadingUpdate} disable={loadingUpdate} className="float-right btn btn-primary" onClick={handleUpdateProfile}>Update</Button></div>
                </>
                )}
            </TitleCard>
        </>
    )
}


export default ProfileSettings