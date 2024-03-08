import './App.css'
import {useForm} from 'React-hook-form'

function App() {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <form className='formContainer' onSubmit={handleSubmit(onSubmit)}>

        <div className='formGroup'>
          <label htmlFor="">cedula</label> 
          <input type="text" name="" id="" {...register("cedula", { required: true, pattern: { value: /^[0-9]*$/, message: "Cedula invalida" } })} maxLength={10}/>
          {errors.cedula && <label htmlFor="" className='errorLabel'>{errors.cedula.message}</label>}
        </div>

        <div className='formGroup'>
          <label htmlFor="">nombre</label> 
          <input type="text" name="" id="" {...register('nombre', { required: true})} />
          {errors.nombre && <label htmlFor="" className='errorLabel'>{errors.nombre.message}</label>}
        </div>

        <div className='formGroup'>
          <label htmlFor="">segundo nombre</label> 
          <input type="text" name="" id="" {...register('segundo_nombre',{ required: true})}/>
          {errors.segundo_nombre && <label htmlFor="" className='errorLabel'>{errors.segundo_nombre.message}</label>}
        </div>

        <div className='formGroup'>
          <label htmlFor="">sexo</label> 
          <select name="" id="" {...register('sexo', { required: true })}>
            <option value="">Seleccione su sexo</option>
            <option value="HOMBRE">Hombre</option>
            <option value="MUJER">Mujer</option>
          </select>
          {errors.sexo && <label htmlFor="" className='errorLabel'>{errors.sexo.message}</label>}
        </div>

        <div className='formGroup'>
          <label htmlFor="">edad</label> 
          <input type="text" name="" id="" {...register('edad', {required:true})} maxLength={3}/>
          {errors.edad && <label htmlFor="" className='errorLabel'>{errors.edad.message}</label>}
        </div>

        <div className='formGroup'>
          <label htmlFor="">email</label> 
          <input type="text" name="" id="" {...register('email')}/>
          {errors.email && <label htmlFor="" className='errorLabel'>{errors.email.message}</label>}
        </div>

        <div className='formGroup'>
          <label htmlFor="">direccion</label> 
          <input type="text" name="" id="" {...register('direccion')}/>
          {errors.direccion && <label htmlFor="" className='errorLabel'>{errors.direccion.message}</label>}
        </div>

        <input type="submit" value="ENVIAR" />

        <div>
        </div>

      </form>
    </>
  )
}

export default App
