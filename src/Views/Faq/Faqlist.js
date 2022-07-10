import classes from "./Faq.module.css";
import { useState } from "react";
import { Plus, Minus } from "../../modules/icons";

const Faqlist = (props) => {
  const { question, answer, shown } = props;
  const [visible, setVisible] = useState(shown);
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className={classes.list}>
      <ul>
        <li onClick={toggleVisibility}>
          <div>
            {question} {visible ? <Minus size={36} /> : <Plus size={36} />}
          </div>

          {visible && <p>{answer}</p>}
        </li>
      </ul>
    </div>
  );
};
export default Faqlist;
