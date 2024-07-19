import { Field } from 'formik';

function FormFields({label, id, type, placeholder, errors, touched}){
    return(
        <>
            <label htmlFor="text">
            {label}
            </label>
            <div>
            <Field
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
            />
            {errors[id] && touched[id] ? (
                <p>{errors[id]}</p>
            ) : null}
            </div>
        </>
    )
}

export default FormFields;