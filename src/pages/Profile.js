import {React,useEffect,useNavigate, useState} from 'react'
import Navbar from '../components/Navbar'
import LikedMovieList from '../components/LikedMovieList'
import axios from 'axios'
import './Profile.css'

function Profile() {

    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const uri = "http://localhost:5000/changePassword"

    const username = localStorage.getItem('username')
    const email = localStorage.getItem('email')
    const token = JSON.parse(localStorage.getItem('Token'))
    
    // console.log(username,email)
    // const Navigate = useNavigate();
    // useEffect(()=>{
    //     // if(username==null){
    //     //     Navigate('/');
    //     // }
    // },[])
    const changePassword = async ()=>{
        if(newPass !== confirmPass){
            alert("Password doesn't match")
        }
        else{
            try {
                const response = await axios({
                    method:'put',
                    url:uri,
                    data:{
                        oldPass,newPass
                    },
                    headers:{
                        'token':token
                    }
                })
                // console.log(response);
                alert(response.data.message)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <div className='profile-page'>
                <div className='userDetails'>
                    <h1 className='userName'>{username}</h1>
                    <h3 className='userEmail'>{email}</h3>
                    <div className='changePassword'>
                    
                        <h4>Change Password</h4>
                       
                        <input 
                            name='oldPass'
                            type="password"
                            placeholder='Old Password'
                            value={oldPass}
                            onChange={(e)=>setOldPass(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder='New Password'
                            value={newPass}
                            onChange={(e)=>setNewPass(e.target.value)}
                        
                        />
                        <input
                            type="password" 
                            placeholder='Re-enter New Password'
                            value={confirmPass}
                            onChange={(e)=>setConfirmPass(e.target.value)}
                        />
                        <button onClick={changePassword}>Change Password</button>
                    
                    </div>
                </div>
                <div className='movieList'>
                    <LikedMovieList/>
                </div>
                
            </div>
        </div>
    )
}

export default Profile