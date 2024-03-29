import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@material-tailwind/react';

export default function CustomerForm({ setFormData, setShowPage, formData }) {
  const initialValues = formData

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.postcode) {
      errors.postcode = 'Postcode is required';
    }

    if (!values.address) {
      errors.address = 'Address is required';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setFormData(values)
    setShowPage(2)
    setSubmitting(false);
  };
  return (
    < >
      <p className=''>Add Customer Details</p>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-3 mt-3'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className="bg-base rounded-[10px] p-[15px] outline-none" />
              <ErrorMessage name="name" component="div" className='text-[red] text-[14px]' />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="phone">Phone</label>
              <Field type="text" name="phone" className="bg-base rounded-[10px] p-[15px] outline-none" />
              <ErrorMessage name="phone" component="div" className='text-[red] text-[14px]' />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="bg-base rounded-[10px] p-[15px] outline-none" />
              <ErrorMessage name="email" component="div" className='text-[red] text-[14px]' />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="postcode">Postcode</label>
              <Field type="text" name="postcode" className="bg-base rounded-[10px] p-[15px] outline-none" />
              <ErrorMessage name="postcode" component="div" className='text-[red] text-[14px]' />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="address">Address</label>
              <Field as="textarea" type="text" name="address" className="bg-base rounded-[10px] p-[15px] outline-none" />
              <ErrorMessage name="address" component="div" className='text-[red] text-[14px]' />
            </div>

            <div className='w-full flex justify-between mt-[15px]'>
              <Button className='bg-second capitalize font-raleway' onClick={() => alert('saved')}>Save</Button>
              <Button className='bg-primary capitalize font-raleway' type="submit" disabled={isSubmitting}>Proceed</Button>
            </div>
            {/* <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}
          </Form>
        )}
      </Formik>
    </>
  )
}
