/**自定义hook： 鼠标跟踪器：鼠标指定处，显示位置 */

import React, { useEffect, useState } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMouse);

    return () => {
      document.removeEventListener("mousemove", updateMouse);
    };
  }, []);
  return position;
};

export default useMousePosition;
