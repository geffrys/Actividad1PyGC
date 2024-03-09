/* eslint-disable react/prop-types */
import { useForm } from 'React-hook-form'
import './Formulario.css'
import axios from 'axios';
import { useEffect } from 'react';

function Formulario({ usuario, setUsuario }) {

    const EDAD_MAXIMA = 80;


    const handleKeyDown = (event) => {
        const keyCode = event.keyCode || event.which;
        if (!(keyCode >= 48 && keyCode <= 57) && keyCode !== 8 && keyCode !== 46) {
            event.preventDefault();
        }
    };
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    useEffect(() => {
        if (usuario) {
            setValue('id', usuario.id)
            setValue('cedula', usuario.cedula)
            setValue('primerNombre', usuario.primerNombre)
            setValue('segundoNombre', usuario.segundoNombre)
            setValue('email', usuario.email)
            setValue('sexo', usuario.sexo)
            setValue('edad', usuario.edad)
            setValue('direccion', usuario.direccion)
        }
    }, [usuario])



    const onSubmit = (data) => {
        if (usuario.id !== undefined && usuario.id !== null && usuario.id !== '') {
            axios.put(`http://localhost:5000/api/v1/cliente`, data)
                .then(response => {
                    alert('Cliente actualizado con exito ' + response.data)
                    setUsuario({})
                })
                .catch(error => {
                    alert('Error al actualizar el cliente, detalle: ' + error)
                })
            return
        }
        axios.post('http://localhost:5000/api/v1/cliente', data)
            .then(response => {
                alert('Cliente registrado con exito ' + response.data)
                setUsuario({ data })
                setUsuario({})
            })
            .catch(error => {
                alert('Error al registrar el cliente, detalle: ' + error)
            })
    }


    return (
        <>

            <div className='contenedorForm'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Formulario</h1>
                    <div className='formGroup'>
                        <label htmlFor="">Cédula</label>
                        <input onKeyDown={handleKeyDown} type="text" name="" id="" {...register("cedula", { required: 'La cedula es un campo requerido.', pattern: { value: /^[0-9]*$/, message: "Cedula invalida" } })} maxLength={10} />
                        {errors.cedula && <label htmlFor="" className='errorLabel'>{errors.cedula.message}</label>}
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="">Primer nombre</label>
                        <input type="text" name="" id="" {...register('primerNombre', { required: 'El nombre es un campo requerido.' })} maxLength={30} />
                        {errors.primerNombre && <label htmlFor="" className='errorLabel'>{errors.primerNombre.message}</label>}
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="">Segundo nombre</label>
                        <input type="text" name="" id="" {...register('segundoNombre')} maxLength={30} />
                        {errors.segundoNombre && <label htmlFor="" className='errorLabel'>{errors.segundoNombre.message}</label>}
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="">Sexo</label>
                        <select name="" id="" {...register('sexo', { required: 'El sexo es un campo requerido.' })}>
                            <option value="">Seleccione su sexo</option>
                            <option value="HOMBRE">Hombre</option>
                            <option value="MUJER">Mujer</option>
                        </select>
                        {errors.sexo && <label htmlFor="" className='errorLabel'>{errors.sexo.message}</label>}
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="edad">Edad</label>
                        <input onKeyDown={handleKeyDown} type="text" name="" id="edad" {...register('edad', {
                            required: 'La edad es un campo requerido.', pattern: { value: /^[0-9]+$/, message: 'Ingresa una edad valida.' }, validate: {
                                max: value => parseInt(value) <= EDAD_MAXIMA || `La edad debe ser menor o igual a ${EDAD_MAXIMA}`,
                                min: value => parseInt(value) >= 0 || "La edad debe ser mayor o igual a 0"
                            }
                        })} maxLength={3} />
                        {errors.edad && <label htmlFor="" className='errorLabel'>{errors.edad.message}</label>}
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="">Email</label>
                        <input type="text" name="" id="" {...register('email', { required: 'El email es un campo requerido.', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Ingresa un email valido.' } })} />
                        {errors.email && <label htmlFor="" className='errorLabel'>{errors.email.message}</label>}
                    </div>

                    <div className='formGroup'>
                        <label htmlFor="">Dirección</label>
                        <input type="text" name="" id="" {...register('direccion', { required: 'La dirección es un campo requerido.' })} />
                        {errors.direccion && <label htmlFor="" className='errorLabel'>{errors.direccion.message}</label>}
                    </div>

                    <center>
                        <input type="submit" value="ENVIAR" className='btn_enviar' />
                    </center>

                    <div>
                    </div>

                </form>
            </div>
        </>
    )
}



export default Formulario;