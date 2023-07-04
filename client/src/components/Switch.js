import { motion, AnimateSharedLayout } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

export default function Switch({ data, selected, setSelected }) {
  // const [selected, setSelected] = useState(data[0]);

  return (
    <AnimateSharedLayout>
      <div className="switch">
        {data.map(item => (
          <Item
            content={item}
            onClick={() => setSelected(item)}
            isSelected={selected === item}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  );
}

function Item({ content, onClick, isSelected }) {
  return (
    <div className="switch_item" onClick={onClick}>
      <h5 style={isSelected ? { opacity: 1 } : {}}>{content}</h5>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          transition={spring}
        />
      )}
    </div>
  );
}
