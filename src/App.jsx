import './App.css'
import { Chart } from "react-google-charts";

export const data = [
  ["Category", "rub"],
  ["Supermarkets", 35465],
  ["Utility bills, cellular communications, internet", 16026],
  ["Transport", 12658],
  ["Restaurants and cafe", 25632],
  ["Trips", 110000],
  ["Recreation and entertainment", 64096],
  ["Other expenses", 32658],
];

export const options = {
  title: "Expenditure for October",
};

function App() {

  return (
    <>
      <div className="card">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"90vw"}
      height={"60vh"}
    />
      </div>
    </>
  )
}

export default App
