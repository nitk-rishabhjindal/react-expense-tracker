import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.title}
        date={props.date}
        amount={props.amount}
      />
    </Card>
  );
};

export default Expenses;
