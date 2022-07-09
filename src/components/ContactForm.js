import { useForm } from 'react-hook-form';
import React from 'react';

const Form = ({ handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => handleFormSubmit(data);
  return (
    <div className="container m-4">
      <div className="section is-medium has-background-info-light">
        <h2 className="title is-2 has-text-centered has-text-blue mb-6 ">
          Get In Touch
        </h2>
        <div className="columns is-variable is-5 mt-5">
          <div className="column is-6  has-background-blue is-flex is-justify-content-center is-align-items-center">
            <h2 className="title is-2 has-text-centered has-text-white mb-5">
              CONTACT US
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="column is-6">
            <div className="field">
              <div className="control name">
                <input
                  className="input"
                  id="Name"
                  type="text"
                  placeholder="Name"
                  {...register('name', { required: true })}
                  error={errors.name?.type === 'required' && 'Name is required'}
                  onChange={(e) => setValue('name', e.target.value)}
                />
              </div>
            </div>
            {/* </div> */}
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  id="phone"
                  type="number"
                  placeholder="Phone Number"
                  {...register('phone', { required: true })}
                  error={
                    errors.phone?.type === 'required' &&
                    'Phone Number is required'
                  }
                  onChange={(e) => setValue('email', e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control msg">
                <textarea
                  className="textarea"
                  rows="4"
                  id="message"
                  type="text"
                  placeholder="Message"
                  {...register('message', { required: true })}
                  error={
                    errors.message?.type === 'required' && 'Message is required'
                  }
                  onChange={(e) => setValue('message', e.target.value)}
                />
              </div>
            </div>

            <div className="buttons has-addons is-right">
              <button type="submit" className="button is-rounded ">
                Send a message now
                <i className=" pl-4 fas fa-long-arrow-alt-right icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
