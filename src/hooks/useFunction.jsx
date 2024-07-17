import { useNavigate } from "react-router-dom";

const useFunction = () => {

    const navigate = useNavigate()
  function truncateText(text, maxLength = 45) {
    if (text?.length > maxLength) {
      return text?.slice(0, maxLength) + "...";
    }

    return text;
  }

  const goTo = (e, url) => {
    e.preventDefault()
    navigate(url)
  }

  const formatDate = (date) => {

    return new Date(date).toLocaleDateString()
  }

  return {
    truncateText,
    goTo,
    formatDate
  };
};

export default useFunction;
