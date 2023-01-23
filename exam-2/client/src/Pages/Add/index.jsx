import React from 'react'

 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios';
import { useEffect } from 'react';

 const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      img: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      job: Yup.string().required('Required'),
  });
function Index() {
  return (
  <>

  <div className='d1'>
  <div className='formCenter'>
  
     <h3>FORM</h3>
   
     <Formik
       initialValues={{
         img: '',
         name: '',
         job: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={(values,{resetForm}) => {
        const arr ={
            img:values.img,
            name:values.name,
            job:values.job

        }

      axios.post('http://localhost:4000/userz',arr)



         // same shape as initial values
         console.log(values);
         resetForm();
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field  name="img" />
           {errors.img && touched.img ? (
             <div>{errors.img}</div>
           ) : null}
           <br/>
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <br/>
           <Field name="job"/>
           {errors.job && touched.job ? <div>{errors.job}</div> : null}
           <br/>
          
           <button className='btn v btn-primary'  type="submit">Submit</button>
         </Form>
       )}
     </Formik>
     </div>
     </div>
   
  
  
  </>
  )
}

export default Index