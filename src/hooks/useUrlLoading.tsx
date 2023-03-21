/**自定义hook： 显示隐藏loading (对比hoc withloader) */
import axios from "axios";
import { useEffect, useState } from "react";

const useUrlLoading = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((result) => {
      setData(result);
      setLoading(false);
    });
  }, deps);

  return [data, loading];
};

export default useUrlLoading;
