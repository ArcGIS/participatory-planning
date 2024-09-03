import { PropsWithChildren } from "react";

export function HUDSubGrid(props: PropsWithChildren) {

  return (
    <div className="p-4 rounded-lg grow-0 flex flex-wrap justify-center gap-6">
      {props.children}
    </div>
  )
}