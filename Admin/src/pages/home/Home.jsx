import { HomeContainer,HomeWidgets } from "./style";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";


export default function Home() {
  return (
    <HomeContainer>
      <HomeWidgets>
        <WidgetSm/>
        <WidgetLg/>
      </HomeWidgets>
    </HomeContainer>
  );
}
