import { MouseEvent, useCallback, useRef, useState } from "react";

type TodoProps = {
  todo: string;
  randomColor: string;
};

// const hi: TodoProps = {
//   todo: "hi",
//   randomColor: "123"
// }

const Card: React.FC<TodoProps> = ({ todo, randomColor }) => {
  const [draggable, setDraggable] = useState<boolean>(false);
  const CardRef = useRef<HTMLDivElement>(null);

  const moveTodo = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      // if (draggable) {
      //   CardRef.current!.style.top =
      //     e.clientX -
      //     (CardRef.current as HTMLDivElement).offsetWidth / 2 +
      //     "px";
      //   // console.dir(CardRef);
      // }
      if (draggable && CardRef.current) {
        CardRef.current.style.left =
          e.clientX - CardRef.current.clientHeight / 2 + "px";

        CardRef.current.style.top =
          e.clientY - CardRef.current.clientWidth / 2 - 86 + "px";
      }
    },
    [draggable]
  );

  return (
    <div
      style={{
        width: "256px",
        height: "256px",
        backgroundColor: randomColor,
        boxSizing: "border-box",
        padding: "8px",
        fontSize: "24px",
        borderRadius: "4px",
        cursor: "grab",
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        // position: "absolute",
      }}
      onMouseDown={() => {
        CardRef.current!.style.position = "absolute";
        setDraggable(true);
      }}
      onMouseMove={moveTodo}
      onMouseUp={() => setDraggable(false)}
      ref={CardRef}
    >
      <span>{todo}</span>
    </div>
  );
};

export default Card;
