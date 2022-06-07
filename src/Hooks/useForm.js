import { useState } from "react";
import { useDispatch } from "react-redux";
import * as userActions from "../redux/actions/UserActions";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = (name, value) => {
    switch (name) {
      case "placa":
        if (value.length < 6) {
          setErrors({
            ...errors,
            placa: true,
          });
        } else {
          setErrors({
            ...errors,
            placa: false,
          });
        }
        break;

      case "tel":
        if (value.length < 9) {
          setErrors({
            ...errors,
            tel: true,
          });
        } else {
          setErrors({
            ...errors,
            tel: false,
          });
        }
        break;

      case "documentId":
        if (value.length < 8) {
          setErrors({
            ...errors,
            documentId: true,
          });
          console.error(errors);
        } else {
          setErrors({
            ...errors,
            documentId: false,
          });
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;
    validate(name, val);
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    dispatch(userActions.createPerson(values));
    if (
      errors?.placa !== undefined &&
      !errors?.placa &&
      errors?.tel !== undefined &&
      !errors?.tel &&
      errors?.documentId !== undefined &&
      !errors?.documentId
    ) {
      navigate(`/dashboard/plan`);
    } else {
      setErrors({
        placa: !errors?.placa ? !errors?.placa : errors?.placa,
        tel: !errors?.tel ? !errors?.placa : errors?.placa,
        documentId: !errors?.documentId ? !errors?.placa : errors?.placa,
      });
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
