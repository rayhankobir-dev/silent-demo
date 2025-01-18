/* eslint-disable react/prop-types */

import { twMerge } from "tailwind-merge";

export const Table = ({ children, className = " ", ...restProps }) => {
  return (
    <div {...restProps} className={twMerge(" sm:min-w-full ", className)}>
      {children}
    </div>
  );
};

const Header = ({ children, className = " ", ...restProps }) => {
  return (
    <div
      {...restProps}
      className={twMerge(
        "p-[16px] font-medium sm:border-t-[1px] border-b-[1px] border-t-[1px]  border-[#DDDDDD] ",
        className
      )}
    >
      {children}
    </div>
  );
};

const Body = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

const Row = ({ children, ...restProps }) => {
  return (
    <div {...restProps} className="sm:border-t-[0.5px]   sm:border-[#DDDDDD]">
      {children}
    </div>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
