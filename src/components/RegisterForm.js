import { useState } from 'react'
import { registerUser } from '../services/Api'

function RegisterForm () {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    username: '',
    password: ''
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await registerUser(formData)
    console.log(result)
  }

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type='text' name='nom' onChange={handleChange} value={formData.nom} />
        </label>
        <br />
        <label>
          Prénom:
          <input type='text' name='prenom' onChange={handleChange} value={formData.prenom} />
        </label>
        <br />
        <label>
          Email:
          <input type='email' name='email' onChange={handleChange} value={formData.email} />
        </label>
        <br />
        <label>
          Pseudo:
          <input type='text' name='username' onChange={handleChange} value={formData.username} />
        </label>
        <br />
        <label>
          Mot de passe:
          <input type='password' name='password' onChange={handleChange} value={formData.password} />
        </label>
        <br />
        <input type='submit' />
      </form>
      {JSON.stringify(formData)}
      {/* Permets de voir les entrées */}
    </div>
  )
}
export default RegisterForm
