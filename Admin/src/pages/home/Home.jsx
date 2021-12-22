import Chart from "../../components/chart/Chart";
import { HomeContainer,HomeWidgets } from "./style";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { publicRequest } from "../../requestMethode";

export default function Home() {

  const [useStats,setUserStats] = useState([]);

  const MONTHS = useMemo(
    ()=>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
  ],[]);

  useEffect(()=>{
    const getStats = async () =>{
      try {
        const res = await publicRequest.get("/subscriber")
        res.data.map((item)=>{
          setUserStats(prev=>[...prev,{name:MONTHS[item._id-1], "Active User":item.total}]);
        })
      } catch (error) {
        console.log(error)
      }
    }
    getStats();
  },[MONTHS])
  return (
    <HomeContainer>
      <Chart data={useStats} title="User Analytics" grid dataKey="Active User"/>
      <HomeWidgets>
        <WidgetSm/>
        <WidgetLg/>
      </HomeWidgets>
    </HomeContainer>
  );
}
