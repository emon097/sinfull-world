import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Sinfull World`;
  }, [title]);
};
export default useTitle;
