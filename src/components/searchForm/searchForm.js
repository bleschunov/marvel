import { useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { Link } from "react-router-dom"
import useMarvelService from "../../services/marvelService"

import './searchForm.scss'
import '../../styles/button.scss'

const SearchForm = ({className}) => {
    const 
        [message, setMessage] = useState(<></>),
        [success, setSuccess] = useState(false)
    
    const { getCharacterByName } = useMarvelService()
    
    return (
        <Formik
            initialValues={{
                query: ''
            }}
            validationSchema={Yup.object({
                query: Yup.string().required('The field is required')
            })}
            onSubmit={values => {
                getCharacterByName(values.query)
                    .then(char => {
                        setSuccess(true)
                        setMessage((
                            <>
                                <div className="searchForm__message searchForm__message_success">
                                    There is! Visit {char.name} page?
                                    <Link to={char.id} className="button button_gray searchForm__link">to page</Link> 
                                </div>
                            </>
                        ))
                        
                    })
                    .catch(() => {
                        setSuccess(false)
                        setMessage((
                            <div className="searchForm__message searchForm__message_error">
                                The character was not found. Check the name and try again
                            </div>
                        ))
                        
                    })
            }}>
                <Form className={`searchForm ${className}`}>
                <h3 className="searchForm__header">Or find a character by name:</h3>
                <div>
                    <Field 
                        className="searchForm__input" 
                        name="query" 
                        type="text" 
                        placeholder="Enter name" 
                        autoComplete="off" /> 
                </div>
                <button className="button button_red searchForm__button" type="submit">find</button>
                <ErrorMessage name="query" component="div" className="searchForm__message searchForm__message_error" />
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={success}
                        timeout={500}
                        classNames="searchForm__message">
                         {message}
                    </CSSTransition>    
                </SwitchTransition>
            </Form>
        </Formik>
    )
}   

export default SearchForm