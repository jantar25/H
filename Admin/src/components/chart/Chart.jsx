import { ChartContainer,Title } from "./style";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <ChartContainer>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="orange" />
          <Line type="monotone" dataKey={dataKey} stroke="#cacebf" />
          <Tooltip />
          {grid && <CartesianGrid stroke="orange" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
