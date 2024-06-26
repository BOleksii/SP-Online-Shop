import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../PlacingOrder/PlacingOrder.scss";
import "../../../PlacingOrder/components/Forma/Forma.scss";
import ButtonModal from "../../../../components/Button/ButtonModal/ButtonModal";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
// import sendOrderEmail  from "../../../../Pages/PlacingOrder/PlacingOrder"; 
import sendOrderEmail from "../YourOrder/YourOrder";


function Forma({ onSubmit, setFormCompleted, sendEmail }) {



  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Поле ім'я є обов'язковим"),
    lastName: Yup.string().required("Поле прізвищє є обов'язковим"),
    email: Yup.string()
      .email("Невірна адреса електронної пошти")
      .required("Поле адреси електронної пошти є обов'язковим"),
    phoneNumber: Yup.string().required("Поле номер телефону є обов'язковим"),
    region: Yup.string().required("Поле область є обов'язковим"),
    city: Yup.string().required("Поле місто є обов'язковим"),
    newPost: Yup.string().required("Поле є обов'язковим"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    region: "",
    city: "",
    newPost: "",
    email: "",
    phoneNumber: "",
  };

  const [customerEmail, setCustomerEmail] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCustomerEmail(values.email); // Зберегти електронну пошту в стані
    alert(JSON.stringify(values, null, 2));
    sendOrderEmail(values.email);
    console.log(setCustomerEmail(values.email)); // Передача електронної пошти в компонент YourOrder

    if (
      values.firstName &&
      values.lastName &&
      values.region &&
      values.city &&
      values.newPost &&
      values.email &&
      values.phoneNumber
    ) {
      resetForm(); 
      setFormCompleted(true);
    }
  };

  

  const togglePromoCoupon = () => {
    setShowPromoCoupon(!showPromoCoupon);
  };

  const toggleLastName = () => {
    setShowLastName(true);
  };

  const toggleEmail = () => {
    setShowEmail(true);
  };

  const togglePhoneNumber = () => {
    setShowPhoneNumber(true);
  };

  const toggleRegion = () => {
    setShowRegion(true);
  };

  const toggleFirstName = () => {
    setShowFirstName(true);
  };

  const toggleCity = () => {
    setShowCity(true);
  };

  const toggleStreet = () => {
    setShowNewPost(true);
  };

  const [showPromoCoupon, setShowPromoCoupon] = useState(false);

  const [showLastName, setShowLastName] = useState(false);

  const [showFirstName, setShowFirstName] = useState(false);

  const [showNewPost, setShowNewPost] = useState(false);

  const [showEmail, setShowEmail] = useState(false);

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const [showRegion, setShowRegion] = useState(false);

  const [showCity, setShowCity] = useState(false);

  return (
    <>
      <div className="PlacingOrder-formik" onSubmit={sendEmail}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, touched, errors }) => (
            <Form className="registration-form">
              <div className="form-enter_login-message">
                <div className="form-enter">
                  <p className="form-enter__text">Вже є аккаунт?</p>
                  <a className="form-enter__button-a" href="/auth">
                    <ButtonModal type="button" text="Введите" />
                  </a>
                </div>
              </div>
              <div className="apply-promoCode">
                <div className="promo-code">
                  Чи є у Вас промокод?
                  <button
                    type="button"
                    onClick={togglePromoCoupon}
                    className="click-active"
                  >
                    Натисніть тут, щоб активувати його
                  </button>
                </div>
                {showPromoCoupon && (
                  <div className="promo-coupon">
                    <label className="label-coupon">
                      <span>Введіть промокод в поле:</span>
                    </label>
                    <div className="form-item">
                      <Field
                        name="coupon_code"
                        id="coupon_code"
                        type="text"
                        placeholder="Промокод"
                        value={values.coupon_code}
                      />

                      <button
                        id="cp_apply"
                        className="bt-outline apply-coup button"
                      >
                        Застосувати промокод
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <ul className="form-element">
                <li className="form-element--li">
                  <label htmlFor="firstName">
                    <p className="form-element__text">
                      Ім'я <span className="asterisk-required">*</span>
                    </p>
                  </label>

                  <Field
                    className={`placingOrder-field${
                      showFirstName &&
                      !values.firstName &&
                      touched.firstName &&
                      errors.firstName
                        ? " error"
                        : ""
                    }`}
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Введить ваше ім'я"
                    value={values.firstName}
                    onClick={toggleFirstName}
                  />
                  {showFirstName && !values.firstName && (
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="error-messages"
                    />
                  )}
                </li>
                <li className="form-element--li">
                  <label htmlFor="lastName">
                    <p className="form-element__text">
                      Прізвище <span className="asterisk-required">*</span>
                    </p>
                  </label>

                  <Field
                    className={`placingOrder-field${
                      showLastName &&
                      !values.lastName &&
                      touched.lastName &&
                      errors.lastName
                        ? " error"
                        : ""
                    }`}
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Введить ваше прізвище"
                    value={values.lastName}
                    onClick={toggleLastName}
                  />
                  {showLastName && !values.lastName && (
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="error-messages"
                    />
                  )}
                </li>
              </ul>

              <ul className="form-element">
                <li className="form-element--li">
                  <label htmlFor="region">
                    <p className="form-element__text">
                      Область
                      <span className="asterisk-required">*</span>
                    </p>
                  </label>

                  <Field
                    className={`placingOrder-field${
                      showRegion &&
                      !values.region &&
                      touched.region &&
                      errors.region
                        ? " error"
                        : ""
                    }`}
                    type="text"
                    id="region"
                    name="region"
                    placeholder="Область"
                    value={values.region}
                    onClick={toggleRegion}
                  />
                  {showRegion && !values.region && (
                    <ErrorMessage
                      name="region"
                      component="div"
                      className="error-messages"
                    />
                  )}
                </li>

                <li className="form-element--li">
                  <label htmlFor="city">
                    <p className="form-element__text">
                      Mісто <span className="asterisk-required">*</span>
                    </p>
                  </label>

                  <Field
                    className={`placingOrder-field${
                      showCity && !values.city && touched.city && errors.city
                        ? " error"
                        : ""
                    }`}
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Введить назву вашого міста"
                    value={values.city}
                    onClick={toggleCity}
                  />
                  {showCity && !values.city && (
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="error-messages"
                    />
                  )}
                </li>
              </ul>

              <label htmlFor="street">
                <p className="form-element__text">
                  Відділення новой пошти{" "}
                  <span className="asterisk-required">*</span>
                </p>
              </label>
              <Field
                className={`placingOrder-field${
                  showNewPost &&
                  !values.newPost &&
                  touched.newPost &&
                  errors.newPost
                    ? " error"
                    : ""
                }`}
                type="text"
                id="newPost"
                name="newPost"
                placeholder="Введить номер відділення Новой Пошти"
                value={values.newPost}
                onClick={toggleStreet}
              />
              {showNewPost && !values.street && (
                <ErrorMessage
                  name="newPost"
                  component="div"
                  className="error-messages"
                />
              )}

              <ul className="form-element">
                <li className="form-element--li">
                  <label htmlFor="email">
                    <p className="form-element__text">
                      Email <span className="asterisk-required">*</span>
                    </p>
                  </label>
                  <Field
                    className={`placingOrder-field${
                      showEmail &&
                      !values.email &&
                      touched.email &&
                      errors.email
                        ? " error"
                        : ""
                    }`}
                    type="email"
                    id="customerEmail"
                    name="email"
                    placeholder="Введить адресу вашоє електронної пошти"
                    value={values.email}
                    onClick={() => {
                      toggleEmail(customerEmail);
                      console.log("Мило прийнято");
                    }}
                  />

                  {showEmail && touched.email && errors.email && (
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-messages"
                    />
                  )}
                </li>
                <li className="form-element--li">
                  <label htmlFor="phoneNumber">
                    <p className="form-element__text">
                      Номер телефону
                      <span className="asterisk-required">*</span>
                    </p>
                  </label>
                  <Field
                    className={`placingOrder-field${
                      showPhoneNumber &&
                      !values.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber
                        ? " error"
                        : ""
                    }`}
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+38(___)___-__-__"
                    value={values.phoneNumber}
                    onClick={togglePhoneNumber}
                  />
                  {showPhoneNumber && !values.phoneNumber && (
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="error-messages"
                    />
                  )}
                </li>
              </ul>

              <CustomCheckbox
                className="customCheckbox-form"
                text="Створити аккаунт"
              />

              <label htmlFor="preorderСomment">
                <p className="form-element__text">Коментар до замовлення</p>
              </label>
              <Field
                className="placingOrder-fields"
                component="textarea"
                id="preorderComment"
                name="preorderComment"
                placeholder="Текст коментаря"
              />
            </Form>
          )}
        </Formik>

      </div>
      {/* )} */}
    </>
  );
}

export default Forma;
