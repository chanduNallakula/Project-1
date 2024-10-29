import React from "react";
import ReactSelect, { GroupBase, StylesConfig } from "react-select";
import type { Props } from "react-select/base";

type OptionType = { value: string; label: string };

interface SelectProps<IsMulti extends boolean>
  extends Partial<Props<OptionType, IsMulti, GroupBase<OptionType>>> {
  isMulti?: IsMulti;
}

function MultiSelect<IsMulti extends boolean = false>(props: SelectProps<IsMulti>) {
  return <ReactSelect {...props} styles={reactSelectCustomStyles(props.isMulti)} />;
}

export default MultiSelect;

const reactSelectCustomStyles = <IsMulti extends boolean>(
  isMulti: IsMulti | undefined
): StylesConfig<OptionType, IsMulti, GroupBase<OptionType>> => ({
  control: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
  menu: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
  option: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
  multiValue: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#d0d2d6",
    fontFamily: "Roboto, sans-serif",
  }),
  input: (provided) => ({
    ...provided,
    fontFamily: "Roboto, sans-serif",
  }),
});
