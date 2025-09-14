import { useEffect } from "react";

function useDetectOutsideClick(ref, onClose) {
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) onClose(false);
      }
      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [onClose, ref]
  );
}

export { useDetectOutsideClick };
