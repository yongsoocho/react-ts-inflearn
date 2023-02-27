type TodoProps = {
  todo: string;
  randomColor: string;
};

export function Card({ todo, randomColor }: TodoProps): React.ReactElement {
  return (
    <div
      style={{
        width: "128px",
        height: "128px",
        backgroundColor: randomColor,
        boxSizing: "border-box",
        padding: "8px",
        fontSize: "24px",
        borderRadius: "4px",
        cursor: "grab",
        boxShadow:
          "box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
      }}
    >
      <span>{todo}</span>
    </div>
  );
}
