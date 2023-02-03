import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

type Props =
  | ({
      as: "a";
      filled?: boolean;
      inverted?: boolean;
      children?: ReactNode;
    } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      as: "link";
      filled?: boolean;
      inverted?: boolean;
      children?: ReactNode;
    } & LinkProps)
  | {
      as?: "button";
      filled?: boolean;
      inverted?: boolean;
      onClick?: () => void;
      children?: ReactNode;
    };

export const Button: FC<Props> = (props) => {
  const colors = props.filled
    ? props.inverted
      ? "text-edu-black bg-white"
      : "bg-edu-black text-white"
    : "text-edu-black";

  const className = `px-6 py-2 border-2 border-edu-black rounded-full items-center cursor-pointer select-none ${colors}`;

  if (props.as === "a") {
    const { as, filled, ...rest } = props;
    return (
      <a className={className} {...rest}>
        {props.children}
      </a>
    );
  }

  if (props.as === "link") {
    const { as, filled, ...rest } = props;
    return (
      <Link className={className} {...rest}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};