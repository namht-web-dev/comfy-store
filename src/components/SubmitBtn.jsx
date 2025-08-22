import { useNavigation } from "react-router-dom";

const SubmitBtn = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button className="btn btn-primary uppercase" type="submit">
      {isSubmitting ? (
        <span className="loading loading-spinner"></span>
      ) : (
        "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
