import { Link } from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from "react-router"
import axios from "axios"
import { toast } from "react-toastify"
import { URL } from '../../config'
import './index.css'
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[role, setRole]= useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
        role,
      }

      // url to make signin api call
      const url = `${URL}/users/signin`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result != null) {
          // toast.success('Welcome to the application')
          // get the data sent by server
          const { id, firstName, lastName, role } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['id'] = id
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName
          sessionStorage['loginStatus'] = 1
          sessionStorage['password'] = password

          // navigate to home component
          //navigate('/home')
          if(role === 'user'){
            toast.success('Welcome to the user application')
            console.log('home')
            navigate('/home')

          }else if(role === 'admin'){
            toast.success('Welcome to the admin application')
            navigate('/admin')
          }
          

        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

    return (
        <div>
          <Header/>
            <h1 className="signin-title">Signin</h1>

            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Email address
                            </label>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="label-control">
                                Password
                            </label>
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                type="password"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <div>
                                No account yet? <Link to="/signup">Signup here</Link>
                            </div>
                            <button onClick={signinUser} className="btn btn-primary">
                                Signin
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Signin