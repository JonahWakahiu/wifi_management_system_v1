import { useField } from "formik";

const CustomInput = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        className={`form_control ${
          meta.touched && meta.error ? "input-error" : ""
        }`}
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <p className="text_error">{meta.error}</p>
      ) : null}
    </>
  );
};
export default CustomInput;
